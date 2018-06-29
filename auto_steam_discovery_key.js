// ==UserScript==
// @name         Auto Discovery Queue For Steam
// @namespace    https://github.com/lcsvcn/auto-steam-discovery-queue/
// @version      1.0.0
// @description  This script will automatically click through your discovery queue so you can get a sale card.
// @author       lcsvcn
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/agecheck/app/*
// @match        *://store.steampowered.com/explore/
// @updateURL    https://raw.githubusercontent.com/lcsvcn/auto-steam-discovery-queue/master/auto_steam_discovery_key.js
// @downloadURL  https://raw.githubusercontent.com/lcsvcn/auto-steam-discovery-queue/master/auto_steam_discovery_key.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Auto Discovery Queue For Steam is running! :)');
    
	try {
        if(window.location.pathname.indexOf('/explore') > -1) {
            document.querySelector('.btnv6_lightblue_blue.btn_medium span').click();
        } else if (window.location.pathname.indexOf('/agecheck') > -1) {
            document.querySelector('.btnv6_blue_hoverfade.btn_small.btn_next_in_queue_trigger span').click();
        } else {
            $J('#next_in_queue_form').submit();
        }
	}
	catch(err) {
		console.log('Error on auto exec...');
	}
})();
