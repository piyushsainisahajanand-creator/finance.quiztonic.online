/* =============================================================================
 *  ADS — CLICK FLOW   (quiztonic.online)
 *  ---------------------------------------------------------------------------
 *  Full-page loader is config-controlled and currently disabled for all flows.
 *  Footer links are excluded (no loader, no ads).
 *
 *  UTM:   page load / page change -> no rewarded ad
 *         first configured clicks -> loader -> rewarded (no Watch Ad popup)
 *         later card clicks        -> destination directly
 *  Direct: click 1,4,7… -> loader -> Watch Ad popup -> reward -> destination
 *          click 2,3,5,6… -> loader -> interstitial -> destination
 *
 *  The visitor ALWAYS reaches the destination (click mode). Every branch ends
 *  at the one idempotent `go()`.
 * ========================================================================== */
(function () {
  'use strict';

  var TAG = '[Ad Flow]';

  var state = {
    gpt: 'pending', // 'pending' | 'ok' | 'blocked'
    /**
     * 'click' — started by a content-link click and ends by navigating.
     * 'auto'  — started on page load for UTM; visitor stays on the page.
     */
    mode: 'click',
    interPhase: 'idle',
    reward: 'idle', // 'idle' | 'loading' | 'ready' | 'unavailable' | 'spent'
    rewardSlot: null,
    rewardEvent: null,
    flowActive: false,
    rewardOpening: false,
    navigated: false,
    dest: '',
    pushedHistory: false,
    interLeft: 0,
    interVisible: false,
    waiters: [],
  };

  var timers = {};
  var appClickFallback = 0;
  var ads = null;
  var ui = { popup: null, spinner: null, title: null, text: null, watch: null, skips: [] };
  var defaultCopy = { title: '', text: '', watch: '' };

  domReady(function () {
    startInit(0);
  });

  function startInit(tries) {
    var found = window.__ads;
    if (!found) {
      if (tries < 50) {
        window.setTimeout(function () {
          startInit(tries + 1);
        }, 50);
      }
      return;
    }
    ads = found;

    if (!ads.enabled || !ads.cfg.adFlowEnabled) {
      wirePlainLinks();
      return;
    }

    // flowPage may flip true a tick later on some pages — wait briefly.
    if (!ads.flowPage) {
      if (tries < 50) {
        window.setTimeout(function () {
          startInit(tries + 1);
        }, 50);
      } else {
        wirePlainLinks();
      }
      return;
    }

    initFlow();
  }

  function initFlow() {
    ensurePopupStyles();
    readUI();
    // Capture phase so we beat native <a> navigation on play cards.
    document.addEventListener('click', onDocumentClick, true);
    window.addEventListener('pageshow', onPageShow);

    arm('gpt', ads.cfg.adFlow.timings.gptWatchdog, function () {
      state.gpt = 'blocked';
      setReward('unavailable');
      log('gpt.js did not execute (blocked?) — links will navigate straight through');
    });
    ads.gt.cmd.push(function () {
      clear('gpt');
      state.gpt = 'ok';
    });

    ads.onServices(function () {
      registerListeners();
      armReward();
      if (autoPlayHere()) startAutoFlow();
    });

    log('click flow armed | visitor:' + (ads.isApp ? 'utm' : 'direct'));
  }

  /** UTM: loader + reward on every page of the session (page load / page change). */
  function autoPlayHere() {
    var mode = ads.cfg.adFlow.autoPlay;
    if (mode === 'app-session') return ads.isApp;
    if (mode === 'app-entry') return ads.isAppEntry;
    return false;
  }

  function startAutoFlow() {
    log('auto flow armed (' + ads.cfg.adFlow.autoPlay + ') — page-load loader + reward');
    if (state.flowActive) return;

    state.mode = 'auto';
    state.flowActive = true;
    state.navigated = false;
    state.dest = '';
    state.interLeft = 0;
    showSpinner();

    var finishWithoutAd = function () {
      log('auto flow: no rewarded ad on load — hiding loader');
      hideSpinner();
      endAutoFlow();
    };

    var openWhenReady = function () {
      if (!state.flowActive || state.navigated || state.mode !== 'auto') return;
      if (state.reward !== 'ready') return finishWithoutAd();
      var delay =
        typeof ads.cfg.adFlow.appLoaderMs === 'number' ? ads.cfg.adFlow.appLoaderMs : 500;
      arm('appLoader', delay, function () {
        if (!state.flowActive || state.navigated || state.mode !== 'auto') return;
        if (state.reward === 'ready') openReward();
        else finishWithoutAd();
      });
    };

    if (state.reward === 'ready') {
      openWhenReady();
      return;
    }
    if (state.reward === 'loading' || state.gpt === 'pending') {
      waitForReward(ads.cfg.adFlow.timings.rewardReady, openWhenReady, 'autoWait');
      return;
    }
    finishWithoutAd();
  }

  /* ------------------------------ listeners -------------------------------- */
  function registerListeners() {
    var pub = ads.gt.pubads();

    pub.addEventListener('rewardedSlotReady', function (event) {
      if (event.slot !== state.rewardSlot) return;
      clear('rewardReady');
      state.rewardEvent = event;
      setReward('ready');
      log('reward ready');
    });

    pub.addEventListener('rewardedSlotGranted', function (event) {
      if (event.slot !== state.rewardSlot) return;
      log('reward granted');
    });

    pub.addEventListener('rewardedSlotClosed', function (event) {
      if (event.slot !== state.rewardSlot) return;
      log('reward closed');
      releaseReward();
      if (state.flowActive) toInterstitial();
    });

    pub.addEventListener('slotRenderEnded', function (event) {
      if (!ads.inter || event.slot !== ads.inter || state.interPhase !== 'pending') return;
      clear('interRender');
      if (event.isEmpty) {
        log('interstitial unfilled — no ad to show');
        afterInterAttempt(false);
        return;
      }
      triggerInterstitial();
    });

    pub.addEventListener('slotVisibilityChanged', function (event) {
      if (!ads.inter || event.slot !== ads.inter || state.interPhase !== 'pending') return;
      onInterVisibility(event.inViewPercentage);
    });
  }

  /* -------------------------------- reward --------------------------------- */
  function armReward() {
    if (state.gpt === 'blocked' || state.rewardSlot) return;
    ads.gt.cmd.push(function () {
      var slot = ads.defineReward();
      if (!slot) {
        setReward('unavailable');
        log('rewarded slot could not be defined (one already exists)');
        return;
      }
      state.rewardSlot = slot;
      state.rewardEvent = null;
      setReward('loading');
      ads.gt.display(slot);
      ads.gt.pubads().refresh([slot]);
      log('reward requested');
      arm('rewardReady', ads.cfg.adFlow.timings.rewardReady, function () {
        if (state.reward !== 'loading') return;
        setReward('unavailable');
        log('no rewardedSlotReady in time — reward unavailable');
      });
    });
  }

  function releaseReward() {
    var slot = state.rewardSlot;
    state.rewardSlot = null;
    state.rewardEvent = null;
    state.rewardOpening = false;
    ads.reward = null;
    clear('rewardReady');
    setReward('spent');
    if (slot) ads.gt.destroySlots([slot]);
  }

  function openReward() {
    var event = state.rewardEvent;
    if (!event) return toInterstitial();
    hideSpinner();
    hidePopup();
    log('opening rewarded ad');
    state.rewardOpening = true;
    try {
      event.makeRewardedVisible();
    } catch (err) {
      log('makeRewardedVisible() failed', err);
      state.rewardOpening = false;
      releaseReward();
      toInterstitial();
    }
  }

  function setReward(next) {
    state.reward = next;
    if (next === 'ready' || next === 'unavailable') {
      var waiters = state.waiters.splice(0);
      for (var i = 0; i < waiters.length; i++) waiters[i]();
    }
  }

  function waitForReward(ms, done, key) {
    key = key || 'rewardWait';
    var settled = false;
    var finish = function () {
      if (settled) return;
      settled = true;
      clear(key);
      done();
    };
    state.waiters.push(finish);
    arm(key, ms, finish);
  }

  /* --------------------------------- click --------------------------------- */
  function onDocumentClick(ev) {
    if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey)
      return;

    // Footer (and other excluded areas): native navigation, no loader / ads.
    var exclude = ads.cfg.adFlow.excludeSelector;
    if (exclude && ev.target && ev.target.closest && ev.target.closest(exclude)) {
      return;
    }

    var link = ev.target && ev.target.closest ? ev.target.closest(ads.cfg.adFlow.linkSelector) : null;
    if (!link) return;
    if (exclude && link.closest && link.closest(exclude)) return;

    var dest = destinationOf(link);
    if (!dest) return;

    ev.preventDefault();
    if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
    else ev.stopPropagation();

    // Show loader immediately so play-card taps always get visible feedback.
    showSpinner();

    if (state.flowActive && state.rewardOpening) {
      log('rewarded ad never appeared — recovering');
      state.flowActive = false;
      releaseReward();
    }

    if (state.flowActive) {
      log('flow already running — tap ignored');
      return;
    }
    state.mode = 'click';
    state.flowActive = true;
    state.navigated = false;
    state.dest = dest;

    if (ads.isApp) {
      if (ads.cfg.adFlow.appRewardMobileOnly && !isMobileVisitor()) {
        log('click -> ' + dest + ' | visitor:utm desktop direct');
        go();
        return;
      }
      if (!appRewardDue()) {
        log('click -> ' + dest + ' | visitor:utm reward limit reached');
        go();
        return;
      }
      if (state.reward === 'spent') armReward();
      state.interLeft = interCountForVisitor();
      log('click -> ' + dest + ' | visitor:utm loader+reward');
      runApp();
      return;
    }

    if (state.reward === 'spent') armReward();

    // Direct cadence: 1,4,7… Watch Popup; 2,3,5,6… Interstitial.
    if (popupDue()) {
      state.interLeft =
        typeof ads.cfg.adFlow.interAfterPopup === 'number' ? ads.cfg.adFlow.interAfterPopup : 0;
      log('click -> ' + dest + ' | visitor:direct Watch Popup');
      runDirectPopup();
    } else {
      state.interLeft = interCountForVisitor();
      log('click -> ' + dest + ' | visitor:direct Interstitial');
      runDirectInter();
    }
  }

  function interCountForVisitor() {
    var cfg = ads.cfg.adFlow;
    var n = ads.isApp ? cfg.interCountApp : cfg.interCountDirect;
    n = typeof n === 'number' ? n : ads.isApp ? 0 : 1;
    return n > 0 ? n : 0;
  }

  function destinationOf(el) {
    if (!el) return '';
    // Play cards often match an inner node (#gameArea / .MainHVR); resolve to the link.
    var node = el;
    if (!node.getAttribute('href') && !node.getAttribute('data-target') && node.closest) {
      var linked =
        node.closest('a[href], [data-target]') ||
        (node.querySelector && node.querySelector('a[href], [data-target]'));
      if (linked) node = linked;
    }
    if (node.getAttribute('target') === '_blank' || node.hasAttribute('download')) return '';
    var raw = node.getAttribute('data-target') || node.getAttribute('href') || '';
    if (!raw || raw.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(raw)) return '';
    try {
      var url = new URL(raw, location.href);
      return url.origin === location.origin ? url.href : '';
    } catch (e) {
      return '';
    }
  }

  /* -------------------------------- UTM path -------------------------------- */
  function runApp() {
    showSpinner();
    var open = function () {
      if (state.reward === 'ready') return openReward();
      toInterstitial();
    };
    if (state.reward === 'ready') {
      var delay =
        typeof ads.cfg.adFlow.appLoaderMs === 'number' ? ads.cfg.adFlow.appLoaderMs : 500;
      arm('appLoader', delay, function () {
        if (!state.flowActive || state.navigated) return;
        open();
      });
      return;
    }
    if (state.reward === 'loading' || state.gpt === 'pending') {
      waitForReward(ads.cfg.adFlow.timings.appWait, function () {
        if (!state.flowActive || state.navigated) return;
        open();
      });
      return;
    }
    toInterstitial();
  }

  /**
   * UTM rewarded-ad allowance is session-scoped and completely separate from
   * the direct visitor popup cadence.
   */
  function appRewardDue() {
    var limit = ads.cfg.adFlow.appRewardClicks;
    limit = typeof limit === 'number' ? limit : 5;
    if (limit <= 0) return false;

    // Versioned so visitors whose previous attempts timed out get a fresh allowance.
    var KEY = 'ad_flow_app_reward_clicks_v2';
    var count = appClickFallback;
    try {
      count = parseInt(sessionStorage.getItem(KEY) || '0', 10) || 0;
    } catch (e) {
      /* use the in-page fallback */
    }
    count += 1;
    appClickFallback = count;
    try {
      sessionStorage.setItem(KEY, String(count));
    } catch (e) {
      /* use the in-page fallback */
    }
    var due = count <= limit;
    log('utm content click #' + count + ' — ' + (due ? 'Reward' : 'Direct'));
    return due;
  }

  function isMobileVisitor() {
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
      return navigator.userAgentData.mobile;
    }
    var ua = navigator.userAgent || '';
    if (/Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(ua)) return true;
    return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  }

  /* ------------------------------ direct path ------------------------------- */
  function runDirectPopup() {
    if (!ui.popup) {
      log('support popup markup missing — falling back to interstitial');
      return runDirectInter();
    }
    showSpinner();
    var delay =
      typeof ads.cfg.adFlow.directLoaderMs === 'number' ? ads.cfg.adFlow.directLoaderMs : 800;
    arm('directLoader', delay, function () {
      if (state.navigated || !state.flowActive) return;
      hideSpinner();
      openSupportPopup();
    });
  }

  function runDirectInter() {
    showSpinner();
    var delay =
      typeof ads.cfg.adFlow.directLoaderMs === 'number' ? ads.cfg.adFlow.directLoaderMs : 800;
    arm('directLoader', delay, function () {
      if (state.navigated || !state.flowActive) return;
      toInterstitial();
    });
  }

  function openSupportPopup() {
    restorePopupCopy();
    ui.popup.classList.remove('hidden');
    ui.popup.setAttribute('aria-hidden', 'false');

    var handled = false;
    var once = function (fn) {
      return function () {
        if (handled) return;
        handled = true;
        fn();
      };
    };

    var watch = once(function () {
      if (state.reward === 'ready') {
        hidePopup();
        showSpinner();
        return openReward();
      }
      if (state.reward === 'loading' || state.gpt === 'pending') {
        showWatchLoading();
        waitForReward(ads.cfg.adFlow.timings.popupWait, function () {
          if (state.reward !== 'ready') return showUnavailable();
          hidePopup();
          showSpinner();
          openReward();
        });
        return;
      }
      showUnavailable();
    });

    var skip = once(function () {
      log('popup skipped');
      hidePopup();
      if (state.interLeft <= 0) state.interLeft = 1;
      toInterstitial();
    });

    if (ui.watch) ui.watch.onclick = watch;
    for (var i = 0; i < ui.skips.length; i++) ui.skips[i].onclick = skip;
    ui.popup.onclick = function (ev) {
      if (ev.target === ui.popup) skip();
    };
  }

  /**
   * Direct click cadence (popupEvery=3):
   *   1st → Watch Popup, 2nd & 3rd → Interstitial, 4th → Watch Popup, …
   * i.e. Watch Popup when (clickCount % popupEvery === 1).
   */
  function popupDue() {
    var every = ads.cfg.adFlow.popupEvery;
    if (every <= 0) return false;
    if (every === 1) return true;

    var KEY = 'ad_flow_clicks';
    var count = 0;
    try {
      count = parseInt(sessionStorage.getItem(KEY) || '0', 10) || 0;
    } catch (e) {
      return true;
    }
    count += 1;
    try {
      sessionStorage.setItem(KEY, String(count));
    } catch (e) {
      /* ignore */
    }
    var due = count % every === 1;
    log('direct content click #' + count + ' — ' + (due ? 'Watch Popup' : 'Interstitial'));
    return due;
  }

  function showUnavailable() {
    log('reward not available');
    var popup = ui.popup;
    if (!popup) return toInterstitial();
    if (ui.title) ui.title.textContent = popup.dataset.emptyTitle || 'Reward not available';
    if (ui.text)
      ui.text.textContent =
        popup.dataset.emptyText || 'No sponsored ad right now — taking you there.';
    if (ui.watch) ui.watch.classList.add('hidden');
    for (var i = 0; i < ui.skips.length; i++) ui.skips[i].classList.add('hidden');
    arm('dwell', ads.cfg.adFlow.timings.unavailableDwell, function () {
      hidePopup();
      toInterstitial();
    });
  }

  /* ------------------------------ interstitial ------------------------------ */
  function toInterstitial() {
    if (state.navigated) return;
    hidePopup();
    showSpinner();

    if (state.interLeft <= 0) {
      log('no interstitials left — done');
      return go();
    }
    if (state.gpt !== 'ok') {
      log('no interstitial slot available');
      return go();
    }

    if (!ads.inter || state.interPhase === 'done') {
      if (typeof ads.defineInter === 'function') {
        ads.gt.cmd.push(function () {
          ads.defineInter();
          requestInterstitial();
        });
        return;
      }
    }
    requestInterstitial();
  }

  function requestInterstitial() {
    if (state.navigated) return;
    if (!ads.inter) {
      log('interstitial could not be defined');
      return go();
    }
    state.interPhase = 'pending';
    state.interVisible = false;
    state.pushedHistory = false;

    log('requesting interstitial (' + state.interLeft + ' left)');
    arm('interRender', ads.cfg.adFlow.timings.interRender, function () {
      log('interstitial requested but nothing rendered');
      afterInterAttempt(false);
    });
    ads.gt.cmd.push(function () {
      ads.gt.display(ads.inter);
      ads.gt.pubads().refresh([ads.inter]);
    });
  }

  function triggerInterstitial() {
    if (state.navigated || state.pushedHistory || state.interPhase !== 'pending') return;
    log('interstitial filled — triggering');
    state.pushedHistory = true;
    history.pushState(null, '', '#interstitial_ad');
    arm('interAppear', ads.cfg.adFlow.timings.interAppear, function () {
      log('interstitial did not appear');
      afterInterAttempt(false);
    });
  }

  function onInterVisibility(inViewPercentage) {
    if (state.navigated) return;
    if (inViewPercentage > 0 && !state.interVisible) {
      state.interVisible = true;
      clear('interAppear');
      hideSpinner();
      log('interstitial visible');
      arm('interDismiss', ads.cfg.adFlow.timings.interDismiss, function () {
        log('interstitial never dismissed');
        afterInterAttempt(true);
      });
      return;
    }
    if (inViewPercentage === 0 && state.interVisible) {
      clear('interDismiss');
      log('interstitial dismissed');
      afterInterAttempt(true);
    }
  }

  function afterInterAttempt(shown) {
    if (state.navigated) return;
    clear('interRender');
    clear('interAppear');
    clear('interDismiss');
    state.interPhase = 'done';
    state.interLeft = Math.max(0, state.interLeft - 1);
    log('interstitial attempt done (shown:' + !!shown + ') — ' + state.interLeft + ' left');

    clearInterHash();

    if (state.interLeft > 0) {
      showSpinner();
      if (ads.inter) {
        try {
          ads.gt.destroySlots([ads.inter]);
        } catch (e) {
          /* ignore */
        }
        ads.inter = null;
      }
      arm('interGap', 400, function () {
        if (state.navigated) return;
        toInterstitial();
      });
      return;
    }
    go();
  }

  function clearInterHash() {
    if (!state.pushedHistory) return;
    state.pushedHistory = false;
    if (location.hash === '#interstitial_ad') {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  /* ------------------------------- the exit --------------------------------- */
  function go() {
    if (state.navigated) return;
    state.navigated = true;
    state.interPhase = 'done';
    state.interLeft = 0;
    clearAll();
    hidePopup();
    hideSpinner();

    if (state.mode === 'auto') return endAutoFlow();

    var url = state.dest;
    if (!url) return;
    if (state.pushedHistory || location.hash === '#interstitial_ad') {
      log('navigating -> ' + url + ' (replace)');
      location.replace(url);
    } else {
      log('navigating -> ' + url);
      location.href = url;
    }
  }

  function endAutoFlow() {
    log('auto flow done — visitor stays on the page');
    clearInterHash();
    unwindHistory();
    state.mode = 'click';
    state.flowActive = false;
    state.navigated = false;
    state.dest = '';
    state.interLeft = 0;
  }

  function unwindHistory() {
    if (!state.pushedHistory) return;
    state.pushedHistory = false;
    if (location.hash === '#interstitial_ad') history.back();
  }

  /* -------------------------------- bfcache --------------------------------- */
  function onPageShow(event) {
    if (!event.persisted) return;
    log('restored from bfcache — resetting the flow');
    clearAll();
    state.mode = 'click';
    state.flowActive = false;
    state.rewardOpening = false;
    state.navigated = false;
    state.dest = '';
    state.pushedHistory = false;
    state.interVisible = false;
    state.interPhase = 'idle';
    state.interLeft = 0;
    state.waiters.length = 0;
    hidePopup();
    hideSpinner();
    restorePopupCopy();
    if (!state.rewardSlot) armReward();
  }

  /* ---------------------------------- UI ------------------------------------ */
  function ensurePopupStyles() {
    if (document.getElementById('adflow-popup-critical-css')) return;
    var style = document.createElement('style');
    style.id = 'adflow-popup-critical-css';
    style.textContent =
      '.hidden{display:none!important}' +
      '.popup-ad-container{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);z-index:1000}' +
      '.support-popup{z-index:1050}' +
      '.support-card{position:relative;width:calc(100% - 40px);max-width:340px;padding:30px 22px 20px;text-align:center;background:#20213f;border:1px solid #404380;border-radius:20px;box-shadow:0 20px 50px rgb(0 0 0 / 50%);font-family:Arial,sans-serif}' +
      '.support-emoji{font-size:42px;line-height:1}' +
      '.support-title{margin:10px 0 0;font-size:22px;font-weight:800;color:#fff}' +
      '.support-text{margin:10px 0 18px;font-size:14px;line-height:1.55;color:#c9cef2}' +
      '.support-watch{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:12px;border:1px solid #404380;border-radius:12px;background:#ff6b35;color:#fff;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 6px 18px rgb(0 0 0 / 35%)}' +
      '.support-watch:hover{background:#ff814f}.support-watch.is-loading{opacity:.75;cursor:progress}' +
      '.support-skip{display:block;width:100%;margin-top:10px;padding:8px;border:0;background:transparent;color:#8789c3;font-size:13px;cursor:pointer}.support-skip:hover{color:#c9cef2}' +
      '.support-close{position:absolute;top:10px;right:12px;width:26px;height:26px;border:0;background:transparent;color:#8789c3;font-size:22px;line-height:1;cursor:pointer}.support-close:hover{color:#fff}' +
      '.support-btn-spinner{width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,.25);border-top-color:#fff;animation:cta-spin .8s linear infinite}' +
      '@keyframes cta-spin{to{transform:rotate(360deg)}}';
    (document.head || document.documentElement).appendChild(style);
  }

  function readUI() {
    var popup = document.getElementById('adflow-popup');
    ui = {
      popup: popup,
      spinner: document.getElementById('adflow-spinner'),
      title: popup ? popup.querySelector('[data-flow-title]') : null,
      text: popup ? popup.querySelector('[data-flow-text]') : null,
      watch: popup ? popup.querySelector('[data-flow-watch]') : null,
      skips: popup ? Array.prototype.slice.call(popup.querySelectorAll('[data-flow-skip]')) : [],
    };
    defaultCopy = {
      title: ui.title ? ui.title.textContent : '',
      text: ui.text ? ui.text.textContent : '',
      watch: ui.watch ? ui.watch.innerHTML : '',
    };
  }

  function restorePopupCopy() {
    if (ui.title) ui.title.textContent = defaultCopy.title;
    if (ui.text) ui.text.textContent = defaultCopy.text;
    if (ui.watch) {
      ui.watch.innerHTML = defaultCopy.watch;
      ui.watch.classList.remove('hidden', 'is-loading');
      ui.watch.disabled = false;
    }
    for (var i = 0; i < ui.skips.length; i++) ui.skips[i].classList.remove('hidden');
  }

  function showWatchLoading() {
    if (!ui.watch) return;
    ui.watch.classList.add('is-loading');
    ui.watch.disabled = true;
    ui.watch.innerHTML = '<span class="support-btn-spinner"></span> Loading…';
  }

  function hidePopup() {
    if (!ui.popup) return;
    ui.popup.classList.add('hidden');
    ui.popup.setAttribute('aria-hidden', 'true');
  }

  function showSpinner() {
    if (ads && ads.cfg.adFlow.loaderEnabled === false) {
      hideSpinner();
      return;
    }
    if (!ui.spinner) readUI();
    if (!ui.spinner) return;
    ui.spinner.classList.remove('hidden');
    ui.spinner.setAttribute('aria-hidden', 'false');
    ui.spinner.style.display = 'flex';
  }

  function hideSpinner() {
    if (!ui.spinner) return;
    ui.spinner.classList.add('hidden');
    ui.spinner.setAttribute('aria-hidden', 'true');
    ui.spinner.style.display = '';
  }

  function wirePlainLinks() {
    document.addEventListener('click', function (ev) {
      if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey)
        return;
      var el = ev.target && ev.target.closest ? ev.target.closest('[data-target]') : null;
      if (!el || (el.tagName === 'A' && el.getAttribute('href'))) return;
      var dest = el.getAttribute('data-target');
      if (!dest) return;
      ev.preventDefault();
      location.href = dest;
    });
  }

  /* -------------------------------- helpers --------------------------------- */
  function arm(name, ms, fn) {
    clear(name);
    timers[name] = window.setTimeout(function () {
      delete timers[name];
      fn();
    }, ms);
  }

  function clear(name) {
    if (!timers[name]) return;
    clearTimeout(timers[name]);
    delete timers[name];
  }

  function clearAll() {
    for (var name in timers) if (Object.prototype.hasOwnProperty.call(timers, name)) clear(name);
  }

  function log() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(TAG);
    console.log.apply(console, args);
  }

  function domReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
})();
