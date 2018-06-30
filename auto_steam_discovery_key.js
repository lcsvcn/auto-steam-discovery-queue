// ==UserScript==
// @name         Auto Discovery Queue For Steam
// @namespace    https://github.com/lcsvcn/auto-steam-discovery-queue/
// @version      1.0.0
// @description  This script will automatically click through your discovery queue so you can get a sale card.
// @author       lcsvcn
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/agecheck/app/*
// @match        *://store.steampowered.com/explore/
// @updateURL    https://github.com/lcsvcn/auto-steam-discovery-queue/raw/master/auto_steam_discovery_key.js
// @downloadURL  https://github.com/lcsvcn/auto-steam-discovery-queue/raw/master/auto_steam_discovery_key.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('Auto Discovery Queue For Steam is running! :)');
	try {
        if(window.location.pathname.indexOf('/explore') > -1) {
            var stop = document.querySelector('.subtext').innerHTML;
            if(stop === "Volte a explorar a sua lista de descobrimento amanhã para ganhar mais cartas!") {
                 console.log('All Cards From Today Farmed ! Reload automatico em 12h...');
                 setTimeout(function(){ location.reload(); }, 12*60*60*1000);
            } else {
                document.querySelector('.btnv6_lightblue_blue.btn_medium span').click();
            }
        } else if (window.location.pathname.indexOf('/agecheck') > -1) {
            var button_op1 = document.querySelector('.next_in_queue_content span');
            var button_op2 = document.querySelector('.btnv6_blue_hoverfade.btn_small.btn_next_in_queue_trigger span');
            if(button_op1) {
                button_op1.click();
            }
            if(button_op2) {
                button_op2.click();
            }

        } else {
            document.querySelector('.next_in_queue_content span').click();
        }
	}
	catch(err) {
		console.log('Error on auto exec...');
	}
})();
