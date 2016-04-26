(function($) {
	$(document).ready(function() {
 		mobileMenu();
 		setExcerptHeights();
		$('body').height(0);
		fixBodyHeight();
		headerSearch();
        euCookieHandler();
		resize = false;

		$(window).resize(function() {
			resize = true;
		});

		setInterval(function() {
			if ( resize ) {
				resize = false;
				$('body').height(0);
				fixBodyHeight();
				$('.excerpt').css('height', '');
				setExcerptHeights();
			}
		}, 250);

		setTimeout(function() { fixBodyHeight(); }, 2000);
	});
})( jQuery )

function fixBodyHeight() {
	$('body').height(0);
	$('body').waitForImages().height($(document).height());
}



function headerSearch() {
	$('.search-icon').click(function(e) {
		e.preventDefault();
		$(this).parents('.search-form').toggleClass('active');
        mobile_menu = $('.trigger-mobile')
        mobile_menu.removeClass('active');
        mobile_menu.siblings('ul').slideUp();
		document.getElementById("s").focus();
	});
}

function euCookieHandler() {
    if(getCookie('eu-cookie-compliance') == void(0)) {
        setCookie('eu-cookie-compliance', 'true', 365);
        $('.cookie-bar').show();
        $('.sidebar').animate({
            top : (parseInt($('.sidebar').css('top'), 10) + $('.cookie-bar').outerHeight(true))
        });
        
        $('.cookie-hider').click(function(e) {
            e.preventDefault();
            $('.cookie-bar').slideUp("fast");
            $('.sidebar').animate({
                top: 60
            },'fast');
         });
    }
}


function setExcerptHeights() {
    $('.blog-row').waitForImages().each(function(){
		$('body').removeClass('no-js');
        var highestBox = 0;
        $('.excerpt', this).each(function(){

            if($(this).height() > highestBox)
               highestBox = $(this).height();
        });

		if(highestBox < 350) {
			highestBox = 350;
		}

        $('.excerpt',this).height(highestBox);

	});
}

function mobileMenu() {
	$('.trigger-mobile').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('ul').slideToggle();
        $('.search-form').removeClass('active');
	});
}

function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var currentDomain = window.location.host;
    var c_value=escape(value) + ((exdays==null) ? "" : (";domain=."+currentDomain+";path=/;expires="+exdate.toUTCString()));
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++) {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name) {
            return unescape(y);
        }
    }
}

function removeCookie(c_name) {
    setCookie(c_name, "", -1);
}
