/* =============================================================================
 *  AD FLOW CONFIG  —  quiztonic.online
 *  ---------------------------------------------------------------------------
 *  Loader: disabled for every visitor and page.
 *  Footer links are excluded (no loader, no ads).
 *
 *  UTM (?utm_source=app):
 *    page load / every page change: no rewarded ad
 *    mobile first 5 card clicks:    rewarded
 *    mobile later clicks:           destination directly
 *    desktop/laptop clicks:         destination directly
 *    Watch Ad popup: NEVER
 *
 *  Direct (no UTM):
 *    click 1,4,7… : loader -> Watch Ad popup -> reward -> destination
 *    click 2,3,5,6… : loader -> interstitial -> destination
 * ========================================================================== */
window.SITE = window.SITE || {
  host: 'quiztonic.online',
  gamNetworkCode: '23390517171',
  adDomain: 'quiztonic.online',
  adsEnabled: true,
  adFlowEnabled: true,

  adFlow: {
    rewardUnit: 'reward',
    interUnit: 'inter',
    appUtmSource: 'app',
    /** Hide the full-page loader for UTM and direct visitors. */
    loaderEnabled: false,
    /** UTM: never open rewarded ads automatically on page load. */
    autoPlay: 'app-entry',
    /** UTM onclick rewards are available only on mobile devices. */
    appRewardMobileOnly: true,
    /** UTM: show rewarded ads only on the first N content clicks per session. */
    appRewardClicks: 5,
    /** Direct: 1st=Watch Popup, 2nd+3rd=Interstitial, 4th=Watch Popup, … */
    popupEvery: 3,
    interCountApp: 0,
    interCountDirect: 1,
    interAfterPopup: 0,
    directLoaderMs: 0,
    appLoaderMs: 0,
    /** Content / game / play cards that run the click flow. */
    linkSelector:
      '.watchAdButton, .buttonContainer, .game-card, .subcat-card, .game-item, .game-item a, #gameArea, .PlayBtn, .MainHVR, [data-flow-link]',
    /** Clicks inside these never show loader or ads (footer, etc.). */
    excludeSelector:
      'footer, footer-component, .footer_bg, .footer-content, .footer-links, .footer-logo, .footer_text, #footer_line, #footer_content',
    timings: {
      gptWatchdog: 3000,
      rewardReady: 4000,
      popupWait: 2500,
      appWait: 4000,
      unavailableDwell: 1400,
      interRender: 2500,
      interAppear: 1500,
      interDismiss: 15000,
    },
  },
};

window.SITE.adUnitPath = function adUnitPath(name) {
  return '/' + window.SITE.gamNetworkCode + '/' + window.SITE.adDomain + '_' + name;
};
