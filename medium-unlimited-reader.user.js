// ==UserScript==
// @name           Medium.com Unlimited Reading
// @namespace      https://github.com/vmanoilov/medium_unlimited_reader
// @version        0.2
// @description    Enables unlimited reading on Medium.com by bypassing paywalls.
// @author         vmanoilov
// @match          *://medium.com/*
// @match          *://*.medium.com/*
// @grant          none
// @run-at         document-end
// @updateURL      https://raw.githubusercontent.com/vmanoilov/medium_unlimited_reader/main/medium-unlimited-reader.user.js
// @downloadURL    https://raw.githubusercontent.com/vmanoilov/medium_unlimited_reader/main/medium-unlimited-reader.user.js
// ==/UserScript==


(function() {
    'use strict';

    // Checks for common paywall indicators on Medium
    function isPaywalled() {
        return document.querySelector('[aria-label="Member-only story"]') ||
               document.querySelector('.overlay--paywall') ||
               document.body.innerHTML.indexOf('Sign in to continue reading') !== -1;
    }

    // Redirects to freedium.cfd with the current URL
    function redirectToFreedium() {
        const currentUrl = window.location.href;
        window.location.href = 'https://freedium.cfd/' + encodeURIComponent(currentUrl);
    }

    // Wait for the page to load and then check for paywall markers
    window.addEventListener('load', function() {
        // Give the page a moment to update its DOM
        setTimeout(function() {
            if (isPaywalled()) {
                console.log('[Medium Updated Script] Paywall detected, redirecting to freedium...');
                redirectToFreedium();
            }
        }, 1500);
    });
})();
