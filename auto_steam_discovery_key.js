(function() {
    'use strict';

    console.log('Steam Auto Queue Loaded - Will try to click Next automatically...');
    
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
		console.log('Error clicking next.');
	}
})();