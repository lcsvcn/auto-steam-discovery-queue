// ==UserScript==
// @name         Auto Discovery Queue For Steam
// @description  This script will automatically click through your discovery queue so you can get a sale card.
//
// @author       lcsvcn
// @namespace    https://github.com/lcsvcn
// @downloadURL  https://github.com/lcsvcn/auto-steam-discovery-queue/raw/master/auto_steam_discovery_key.js
//
// @license      MIT License
// @copyright    Copyright (C) 2018, by Lucas V C Nicolau
//
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/agecheck/app/*
// @match        *://store.steampowered.com/explore/
//
// @version      1.0.1
// @updateURL    https://github.com/lcsvcn/auto-steam-discovery-queue/raw/master/auto_steam_discovery_key.js
//
// @unwrap
// @grant        none
//
// ==/UserScript==

/**
 * MIT License
 *
 * Copyright (C) 2018, by Lucas V C Nicolau
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
