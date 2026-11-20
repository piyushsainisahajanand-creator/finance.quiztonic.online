/* =============================================================================
 *  Play pages — boot the shared ad-flow (UTM + Direct).
 *  Loaded once from footer2.js / games2.js.
 * ========================================================================== */
(function () {
  'use strict';

  if (window.__adFlowBooted) return;
  window.__adFlowBooted = true;

  var adsBase = '/adscripts/';
  var cssHref = '/play/css/ad-flow-ui.css';
  var SCRIPTS = [adsBase + 'ad-flow-config.js', adsBase + 'ad-flow-head.js', adsBase + 'ad-flow.js'];

  // Critical loader CSS inline so the spinner always shows even if CSS file is late/cached wrong.
  function ensureInlineCss() {
    if (document.getElementById('adflow-inline-css')) return;
    var style = document.createElement('style');
    style.id = 'adflow-inline-css';
    style.textContent =
      '#adflow-spinner.cta-loader{position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:rgba(15,23,42,.85);color:#fff;font:600 15px Arial,sans-serif}' +
      '#adflow-spinner.hidden{display:none!important}' +
      '#adflow-spinner .cta-spinner{width:46px;height:46px;border-radius:50%;border:4px solid rgba(255,255,255,.2);border-top-color:#ff6b35;animation:adflowSpin .8s linear infinite}' +
      '@keyframes adflowSpin{to{transform:rotate(360deg)}}' +
      '#adflow-popup.hidden{display:none!important}' +
      '#adflow-popup.popup-ad-container{position:fixed;inset:0;z-index:99998;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7)}';
    (document.head || document.documentElement).appendChild(style);
  }

  function ensureCss() {
    if (document.querySelector('link[data-adflow-ui]')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssHref;
    link.setAttribute('data-adflow-ui', '1');
    (document.head || document.documentElement).appendChild(link);
  }

  function ensureGpt(done) {
    window.googletag = window.googletag || { cmd: [] };
    if (window.googletag.apiReady || document.querySelector('script[src*="gpt.js"]')) {
      done();
      return;
    }
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
    s.crossOrigin = 'anonymous';
    s.onload = done;
    s.onerror = done;
    (document.head || document.documentElement).appendChild(s);
  }

  function ensureMarkup() {
    if (!document.body) return;
    if (!document.getElementById('adflow-spinner')) {
      var spinner = document.createElement('div');
      spinner.id = 'adflow-spinner';
      spinner.className = 'cta-loader hidden';
      spinner.setAttribute('role', 'status');
      spinner.setAttribute('aria-live', 'polite');
      spinner.setAttribute('aria-hidden', 'true');
      spinner.innerHTML = '<div class="cta-spinner"></div><span>Loading…</span>';
      document.body.appendChild(spinner);
    }
    if (!document.getElementById('adflow-popup')) {
      var popup = document.createElement('div');
      popup.id = 'adflow-popup';
      popup.className = 'popup-ad-container support-popup hidden';
      popup.setAttribute('role', 'dialog');
      popup.setAttribute('aria-modal', 'true');
      popup.setAttribute('aria-hidden', 'true');
      popup.setAttribute('data-empty-title', 'Reward not available');
      popup.setAttribute('data-empty-text', 'No sponsored ad right now — taking you there anyway.');
      popup.innerHTML =
        '<div class="support-card">' +
        '<button type="button" class="support-close" data-flow-skip aria-label="Close">&times;</button>' +
        '<div class="support-emoji">💛</div>' +
        '<h3 class="support-title" data-flow-title>Support Us</h3>' +
        '<p class="support-text" data-flow-text>Watch a short sponsored ad to help keep this content free for everyone.</p>' +
        '<button type="button" class="support-watch" data-flow-watch>▶ Watch Sponsored Ad</button>' +
        '<button type="button" class="support-skip" data-flow-skip>No thanks, continue</button>' +
        '</div>';
      document.body.appendChild(popup);
    }

    var playAreas = document.querySelectorAll('#gameArea, .PlayBtn, .gameArea');
    for (var i = 0; i < playAreas.length; i++) {
      var a = playAreas[i].closest && playAreas[i].closest('a[href]');
      if (a) a.setAttribute('data-flow-link', '');
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[data-adflow-src="' + src + '"], script[src="' + src + '"]')) {
        resolve();
        return;
      }
      var s = document.createElement('script');
      s.src = src;
      s.setAttribute('data-adflow-src', src);
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        console.error('[Ad Flow] failed to load', src);
        reject(new Error(src));
      };
      (document.head || document.documentElement).appendChild(s);
    });
  }

  function boot() {
    ensureInlineCss();
    ensureCss();
    ensureMarkup();
    ensureGpt(function () {
      var chain = Promise.resolve();
      SCRIPTS.forEach(function (src) {
        chain = chain.then(function () {
          return loadScript(src);
        });
      });
      chain
        .then(function () {
          console.log('[Ad Flow] play boot ready');
        })
        .catch(function (err) {
          console.error('[Ad Flow] play boot failed', err);
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
