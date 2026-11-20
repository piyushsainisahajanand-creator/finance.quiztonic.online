/* Rewarded / interstitial click flow moved to:
 *   ad-flow-config.js  ->  ad-flow-head.js  ->  ad-flow.js
 * This file is kept so old <script src="quizTcz_v1_reward.js"> includes
 * do not 404. Prefer the new scripts on flow pages.
 */
(function () {
  'use strict';
  if (window.__ads) return; // new flow already loaded
  console.warn('[Ad Flow] quizTcz_v1_reward.js is a stub — include ad-flow-*.js instead');
})();
