/* =============================================================================
 *  AD FLOW — HEAD  (quiztonic.online)
 *  ---------------------------------------------------------------------------
 *  UTM / app visitor detection + out-of-page interstitial slot for the click
 *  flow. Does NOT define or refresh any display / banner slots — those stay
 *  with quizTcz_v1_landing_top.js.
 *
 *  Does NOT call disableInitialLoad(): landing_top relies on normal GPT
 *  display() to fill banners.
 * ========================================================================== */
(function () {
  'use strict';

  var TAG = '[Ad Flow]';
  var cfg = window.SITE;
  if (!cfg) return;

  var appEntry = false;

  window.googletag = window.googletag || { cmd: [] };
  var gt = window.googletag;
  var pending = [];

  var ads = {
    cfg: cfg,
    gt: gt,
    enabled: !!cfg.adsEnabled,
    pageKind: detectPageKind(location.pathname),
    // Enabled immediately so late-loaded play pages don't miss the click handler.
    flowPage: !!(cfg.adsEnabled && cfg.adFlowEnabled),
    isApp: resolveAppVisitor(cfg.adFlow && cfg.adFlow.appUtmSource),
    isAppEntry: false,
    banners: [],
    inter: null,
    reward: null,
    defineReward: defineReward,
    defineInter: defineInter,
    servicesReady: false,
    onServices: function (fn) {
      if (ads.servicesReady) fn();
      else pending.push(fn);
    },
  };
  ads.isAppEntry = appEntry && ads.isApp;
  window.__ads = ads;

  if (!cfg.adsEnabled) {
    console.log(TAG, 'ads disabled');
    return;
  }

  domReady(function () {
    ads.flowPage = !!(cfg.adsEnabled && cfg.adFlowEnabled);
    gt.cmd.push(defineFlowSlots);
  });

  function defineFlowSlots() {
    if (ads.flowPage) {
      ads.inter = defineInter();
    }

    try {
      gt.pubads().setTargeting('page_kind', ads.pageKind);
      gt.pubads().setTargeting('traffic', ads.isApp ? 'app' : 'web');
    } catch (e) {
      /* pubads may not be ready yet in rare races */
    }

    // Safe if landing_top already called it; needed if this page has no banners.
    try {
      gt.enableServices();
    } catch (e) {
      /* ignore */
    }

    ads.servicesReady = true;
    console.log(
      TAG,
      'flow head ready | page:' + ads.pageKind,
      'flow:' + (ads.flowPage ? 'on' : 'off'),
      'inter:' + (ads.inter ? 'defined' : 'none'),
      'visitor:' + (ads.isApp ? 'app' : 'web'),
    );
    var queued = pending.splice(0);
    for (var i = 0; i < queued.length; i++) queued[i]();
  }

  function defineInter() {
    if (ads.inter) {
      try {
        gt.destroySlots([ads.inter]);
      } catch (e) {
        /* ignore */
      }
      ads.inter = null;
    }
    var slot = gt.defineOutOfPageSlot(
      cfg.adUnitPath(cfg.adFlow.interUnit),
      gt.enums.OutOfPageFormat.INTERSTITIAL,
    );
    if (!slot) return null;
    slot.addService(gt.pubads());
    ads.inter = slot;
    return slot;
  }

  function defineReward() {
    var slot = gt.defineOutOfPageSlot(
      cfg.adUnitPath(cfg.adFlow.rewardUnit),
      gt.enums.OutOfPageFormat.REWARDED,
    );
    if (!slot) return null;
    slot.addService(gt.pubads());
    ads.reward = slot;
    return slot;
  }

  /**
   * App traffic = arrived with ?utm_source=<source>.
   * Same on mobile and desktop. Flag is session-scoped; URL is cleaned after read.
   */
  function resolveAppVisitor(source) {
    if (!source) return false;
    var KEY = 'ad_flow_app';
    var flagged = false;
    try {
      flagged = sessionStorage.getItem(KEY) === '1';
    } catch (e) {
      /* storage blocked */
    }

    var params = new URLSearchParams(location.search);
    if (params.get('utm_source') === source) {
      flagged = true;
      appEntry = true;
      try {
        sessionStorage.setItem(KEY, '1');
      } catch (e) {
        /* ignore */
      }
      params.delete('utm_source');
      var qs = params.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
    }

    return flagged;
  }

  function detectPageKind(pathname) {
    var path = pathname.replace(/\/+$/, '') || '/';
    if (path === '/' || /\/index\.html$/i.test(path) && (path.match(/\//g) || []).length <= 1)
      return 'landing';
    if (path.indexOf('/play') === 0) return path === '/play' ? 'listing' : 'play';
    if (/\/en\/[^/]+$/i.test(path) || /\/en\/[^/]+\/index\.html$/i.test(path)) {
      if (/-page(\/index\.html)?$/i.test(path)) return 'other';
      return 'category';
    }
    if (/\/en\/[^/]+\/[^/]+/i.test(path)) return 'article';
    return 'other';
  }

  function domReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
})();
