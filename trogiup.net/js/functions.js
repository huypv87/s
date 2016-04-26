// Set cookie 
function setCookie(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
// Get cookie
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
function getTransform(obj, pos) {
    if( obj.length <= 0 ) {
        return 0;
    }
    if( ! pos ) { pos = 4; }
    var matrix = obj.css('transform')
                    || obj.css("-webkit-transform")
                    || obj.css("-moz-transform")
                    || obj.css("-ms-transform");
    if( ! matrix ) {
        return 0;
    }
    var transform = matrix.substr(7, matrix.length - 8).split(', ');
    var d =  transform[pos] ? parseInt( transform[pos] )  : 0;
    return d;
}
(function($) {
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css({
                    'user-select'   : 'none',
                    '-moz-user-select' : 'none'
                 })
                 .on('selectstart', function(event){
                    if( onScrollBar ) {
                        event.preventDefault();
                        return false;
                    }
                 });
    };
    $.fn.enableSelection = function() {
        return this
                 .attr('unselectable', 'off')
                 .css({
                    'user-select'   : 'text',
                    '-moz-user-select' : 'none'
                 });
    };
    function translate( percent, obj, type, vertical ){
        var type = type ? type : '%';
        var op = percent + type + ', 0';
        if( vertical ) {
            op = '0,'+percent + type;
        }
        console.log( op );
        if ( Modernizr.csstransforms3d ) {
            obj.css("transform", "translate3d("+op+",0) scale3d(1,1,1)");
        } else if ( Modernizr.csstransforms ) {
            obj.css("transform", "translate("+op+")");
        }
    }
    var onMenu = false, 
        onSecondarySidebar = false, 
        secondarySidebar = $('#secondary'),
        sideContent = $('#side-content');
        mashheadHeight = 0;
    $(window).resize(function(e){
        nav_menu.removeAttr('style'); 
        navW = nav_menu.width();
        // height of canvas menu
        if( $(this).width() >= 980 ) {
            nav_menu.css({ 'height' : 'auto', 'overflow' : 'inherit' });

            if( position != 0 ) {
                position = 0;
                $('#main, .handheld-header, #secondary').removeAttr('style');
            }
        } else {
            nav_menu.height( $(this).height() ).css({ 'overflow' : 'hidden' });
        }

        var heightViewPort = $(window).height();
        if( $('#wpadminbar').length > 0 ){
            var adminBarHeight = $('#wpadminbar').outerHeight();
            heightViewPort -= adminBarHeight ;
        }
        //update sidebar content
        sideContent.height( heightViewPort - mashheadHeight - 80 );
    });
    // Main nav mask
	$('.navbar li' ).on( 'mouseover', function() {
		if( $(this).find('.sub-menu').length > 0 ) {
			$( '.nav-mask' ).addClass('active');
		}
	});   
	$('.navbar li').on('mouseout', function() {
		$( '.nav-mask' ).removeClass('active');
	});
    $('.show-sub-menu-btn').on('click',function(event){
        event.preventDefault();
        $(this).closest('.menu-item').toggleClass('show-sub-menu');
    });
    // tinynav (ul to select)
    $('#side-content .menu').tinyNav({
        header: 'Select'
    }); 
    
    
    //Functions SangMenu
    var nav_menu = $('.nav-offcanvas'),
        navW = nav_menu.width(),
        W = $(window).width(),
        position = 0, horizontalDragging = false;
    $('.button-show-nav').on('click',function(e){
        e.preventDefault();
        var viewPortHeight = $(window).height(),
            currentPosition = getTransform( $('#main, .handheld-header') );
        nav_menu.height( viewPortHeight -  $('.navbar-search').height() ).css( 'overflow', 'hidden' );
        $('#main, .handheld-header').css('transition', 'all .3s');
        if( 'undefined' == typeof currentPosition || currentPosition == 0 ) {
            translate( navW, $('#main, .handheld-header'), 'px' );
            position = navW;
        } else {
            translate( 0, $('#main, .handheld-header'), 'px' );
            position = 0;
        }
        setTimeout( function(){ $('#main, .handheld-header').css('transition', 'none') },300 );
    });
    var secondarySidebarTop = -100;
    $('.button-show-sidebar').on('click touch',function(e){
        e.preventDefault();
        var sidebarWidth = secondarySidebar.outerWidth();
        $('#main, .handheld-header').css('transition', 'all .3s');
        if( position == 0 ) {
            if( ! secondarySidebar.find('.scrollbar').length  ) {
                makeScrollBar( secondarySidebar, secondarySidebar.find('.secondary-inner') );
            } else {
                resetScrollBar();
            }
            secondarySidebar.css('top', ($(window).scrollTop() +  secondarySidebarTop) + 'px');
            translate( -sidebarWidth, $('#main, .handheld-header'), 'px' );
            position = -sidebarWidth;
        } else {
            secondarySidebar.css('top', secondarySidebarTop + 'px' );
            translate( 0, secondarySidebar.find('.secondary-inner'), 'px', true);
            translate( 0, $('#main, .handheld-header'), 'px' );
            position = 0;
        }
        setTimeout( function(){ $('#main, .handheld-header').css('transition', 'none') },300 );
    });
    jQuery(document).ready(function($) {
        $(window).scrollTop(1);
        mashheadHeight = $('#mashhead').height();
        $('#main').css( 'min-height', $(window).height() );
        var scalePage = function(){
            if( $('#page').height() < $(window).height() ) {
                $('#page').height( $(window).height() );
            }   
        }
        scalePage();
        $(window).resize(function(){
            scalePage;
        });
        if( $('#side-content').length > 0 ) {
            //SIDE-CONTENT SCROLL
            var sideContentScrolling = false;
            //Make side-content fixed when scrolling
            $(window).scroll(function(event){
                var headPos = $('#mashhead').offset(),
                    sidebarPos = $('#content').offset(),
                    sidebarTop = $('#mashhead').height() + 40,
                    sidebarHeight = $(window).height() - $('#mashhead').height() - 40;
                if( $('#wpadminbar').length > 0 ){
                    var adminBarHeight = $('#wpadminbar').height();
                    sidebarTop += adminBarHeight;
                    sidebarHeight -= adminBarHeight;
                }             
                if( headPos.top + $('#mashhead').height() >= sidebarPos.top - 45 ) {
                    if( ! sideContentScrolling ) {
                        $('#side-content').scrollTop(0);
                    }
                    sideContentScrolling = true;
                    makeScrollBar( sideContent, sideContent );

                    sideContent.find('.scrollbar').css({
                        'position'      : 'fixed',
                        'top'           : sidebarTop  + 'px',
                        'left'          : sideContent.offset().left + sideContent.outerWidth()
                    }).show();

                    sideContent.css({
                        'position' : 'fixed',
                        'top'      : sidebarTop  + 'px',
                        'z-index'  : 1,
                        'height'   : ( sidebarHeight - 40 ) + 'px',
                        'overflow' : 'hidden'
                    });
                } else {
                    sideContentScrolling = false;
                    sideContent.find('.scrollbar').hide();
                    sideContent.css({
                        'position' : 'relative',
                        'top'      : 0,
                        'height'   : 'auto',
                        'overflow' : 'inherit'
                    });
                }
                // Secondary scroll
                var currentPosition = getTransform($('#main, .handheld-header') );
                if( currentPosition != 0 ) {
                    secondarySidebar.css('top', ( $(window).scrollTop() - 100 ) + 'px');
                }
            });
            $(window).on('mousewheel DOMMouseScroll', function(event){
                var currentPosition = getTransform($('#main, .handheld-header') ) ,
                    isMainTransformMove =  0 != currentPosition && 'undefined' != typeof currentPosition  ? true : false;
                if( isMainTransformMove || onMenu ) { 
                    event.preventDefault(); 
                    return false;
                }
            });
            if( 'ontouchstart' in document.documentElement ) {
                $(window).on('touchmove',function(event){
                    var offcanvasPosition = getTransform($('#main, .handheld-header'));
                    if( offcanvasPosition != 0 ) {
                        event.preventDefault();
                    }
                });
            } else {
                $(window).on('mousewheel DOMMouseScroll', function(event){
                    var offcanvasPosition = getTransform($('#main, .handheld-header'));
                    if( offcanvasPosition > 0 ) { 
                        event.preventDefault(); 
                        return false;
                    }
                });
            }           
            //Bind mouse wheel on side-content
            sideContent.on('mouseover',function(e){
                if( $(window).width() <= 1200 ) { return e; }
                var headPos = $('#mashhead').offset(),
                    sidebarPos = $('#content').offset(),
                    sidebarTop = $('#mashhead').height() + 40,
                    sidebarHeight = $(window).height() - $('#mashhead').height() - 40;
                if( $('#wpadminbar').length > 0 ){
                    var adminBarHeight = $('#wpadminbar').height();
                    sidebarTop += adminBarHeight;
                    sidebarHeight -= adminBarHeight;
                }             
                if( headPos.top + $('#mashhead').height() - sidebarPos.top + 45 < 0 ) {
                    return e;
                }
                onMenu = true; 
            }).on('mouseout',function(e){
                if( $(window).width() <= 1200 ) { return e; }
                onMenu = false;
            }).on('mousewheel DOMMouseScroll', function(e){
                if( $(window).width() <= 1200 ) { return e; }
                var scrollTop = sideContent.scrollTop(),
                    step = parseInt( sideContent.css('line-height') ),
                    scrollHeight = sideContent[0].scrollHeight + step;
                var delta = - e.originalEvent.detail || e.originalEvent.wheelDelta;
                var thisScrollBar = $(this).find('.scrollbar');
                if( delta /120 > 0) {
                    //Scrolling up
                    if( scrollTop - step <= 0 ) {
                        onMenu = false;
                        sideContent.scrollTop( 0 );
                        thisScrollBar.find('.scrollbar-inner').css({
                            'margin-top' : 0
                        });
                    } else {
                        sideContent.scrollTop( scrollTop - step );
                        thisScrollBar.find('.scrollbar-inner').css({
                            'margin-top' : (scrollTop - step) / scrollHeight * sideContent.height()
                        });
                    }
                } else {
                    //Scrolling down
                    if( scrollTop >=  scrollHeight ) {
                        onMenu = false; 
                        sideContent.scrollTop( scrollHeight );
                    } else {
                        sideContent.scrollTop( scrollTop + step );
                        thisScrollBar.find('.scrollbar-inner').css({
                            'margin-top' : (scrollTop + step) / scrollHeight * sideContent.height()
                        });
                    }
                }
            });
            if( 'ontouchstart' in document.documentElement ) {
                //Remove mousewheel on touch device
                $('#side-content').unbind('mousewheel');
            }
            //END SIDE-CONTENT SCROLL
        }
        //NAV MENU
        //Nav menu on mouse 
        if( 'ontouchstart' in document.documentElement ) {
            var onScrollMenu = false;
            var navMenuScrollTop = nav_menu.scrollTop();

            nav_menu.hammer({ drag_lock_to_axis: true })
            .on('dragup dragdown',function(event){
                event.gesture.preventDefault();

                var currentPosition = getTransform($('#main, .handheld-header') );
                if( currentPosition == 0 ) {
                    return false;
                }
                var scrollHeight = nav_menu[0].scrollHeight,
                    step = nav_menu.find('li').height();

                switch(event.type) {
                    case 'dragdown':
                        onScrollMenu = true;
                    // case 'swipeup':
                        nav_menu.scrollTop( navMenuScrollTop - event.gesture.distance );
                        break;
                    case 'dragup':
                        onScrollMenu = true;
                    // case 'swipedown':
                        nav_menu.scrollTop( navMenuScrollTop + event.gesture.distance );
                        break;
                }
            })
            .on('touch',function(event){
                onMenu = true;
                navMenuScrollTop = nav_menu.scrollTop();
            })
            .on('release',function(event){
                onMenu = false;
                setTimeout(function(){
                    onScrollMenu = false;
                },200);
            });
            nav_menu.find('a').on('click',function(event){
                if( onScrollMenu ) {
                    event.preventDefault();
                    return false;
                }
            });
        } else {
            nav_menu.on('mousewheel DOMMouseScroll',function(event){
                var currentPosition = getTransform($('#main, .handheld-header') );
                var delta = - event.originalEvent.detail || event.originalEvent.wheelDelta;
                if( currentPosition == 0 ) {
                    return event;
                }
                var scrollTop = nav_menu.scrollTop(),
                    scrollHeight = nav_menu[0].scrollHeight,
                    step = nav_menu.find('li').height();

                if( delta / 120 > 0) {
                    //Scrolling up
                    $(this).scrollTop( scrollTop - step );
                } else {
                    //Scrolling down
                    $(this).scrollTop( scrollTop + step );
                }
            });
        }
        //SECONDARY SIDEBAR
        if( 'ontouchstart' in document.documentElement ) {
            //Secondary Sidebar
            var s = secondarySidebar.find('.secondary-inner'),
                scrollPos = getTransform( s, 5 ),
                secondaryScrolling = false;
            secondarySidebar.hammer({ drag_lock_to_axis: true })
            .on('dragup dragdown swipedown swipeup',function(event){
                event.gesture.preventDefault();
                var currentPosition = getTransform($('#main, .handheld-header') );
                if( currentPosition == 0 ) {
                    return false;
                }
                var scrollHeight = s.height(),
                    heightViewPort = $(window).height();
                switch(event.type) {
                    case 'swipedown':
                    case 'dragdown':
                        secondaryScrolling = true;
                        var d = parseInt( scrollPos + event.gesture.distance );
                        if( d > 0 ) { 
                            d = 0; 
                        }
                        secondarySidebar.find('.scrollbar .scrollbar-inner').css({
                            'margin-top' : Math.abs( d * heightViewPort / scrollHeight )
                        });
                        translate( d, s, 'px', true );
                        break;
                    case 'swipeup':
                    case 'dragup':
                        secondaryScrolling = true;
                        var d = parseInt( scrollPos - event.gesture.distance );
                        if( Math.abs( d ) > scrollHeight - heightViewPort  ) {
                            d = - ( scrollHeight - heightViewPort );
                        }
                        secondarySidebar.find('.scrollbar .scrollbar-inner').css({
                            'margin-top' : Math.abs( d * heightViewPort / scrollHeight )
                        });
                        translate( d, s, 'px', true );
                        break;
                }
            })
            .on('touch',function(event){
                scrollPos = getTransform( s, 5 );
                onMenu = true;
            })
            .on('release',function(event){
                onMenu = false;
                setTimeout(function(){
                    secondaryScrolling = false;
                },200);
            });
            s.find('a').on('click',function(event){
                if( secondaryScrolling ) {
                    event.preventDefault();
                    return false;
                }
            });
        } else {
            secondarySidebar.on('mousewheel DOMMouseScroll',function(event){
                var scrollPos = getTransform( secondarySidebar.find('.secondary-inner'), 5  );
                var currentPosition = getTransform($('#main, .handheld-header') );
                if( currentPosition == 0 ) { return event; }
                event.preventDefault();
                var delta = - event.originalEvent.detail || event.originalEvent.wheelDelta;

                var s = $(this).find('.secondary-inner'),
                    scrollHeight = s.height(),
                    step = 30,
                    heightViewPort = $(window).height();
                if( delta /120 > 0) {
                    //Scrolling up
                    scrollPos += 30;
                    if( scrollPos > 0 ) { 
                        scrollPos = 0; 
                    }
                    secondarySidebar.find('.scrollbar .scrollbar-inner').css({
                        'margin-top' : Math.abs( scrollPos * heightViewPort / scrollHeight )
                    });
                    translate( scrollPos, s, 'px', true );
                } else {
                    //Scrolling down
                    scrollPos -= 30;
                    if( Math.abs( scrollPos ) > scrollHeight - heightViewPort  ) { 
                        scrollPos = - ( scrollHeight - heightViewPort );  
                    }
                    secondarySidebar.find('.scrollbar .scrollbar-inner').css({
                        'margin-top' : Math.abs( scrollPos * heightViewPort / scrollHeight )
                    });
                    translate( scrollPos, s, 'px', true );
                }
            });
        }
    });   
    //Scrollbar
    var onScrollBar = false;
    $('#main').on('mousedown',function(event){
        if( onScrollBar ) {
            event.preventDefault();
        }
    });
    function makeScrollBar( container, scroll ){
        var html = $('<div class="scrollbar"><div class="scrollbar-inner"></div></div>'),
            heightViewPort = $(window).height(),
            scrollHeight = scroll.height();
        if( container.find('.scrollbar').length <= 0 ) {
            container.append( html );
        }
        if( $('#wpadminbar').length > 0 ){
            var adminBarHeight = $('#wpadminbar').outerHeight();
            heightViewPort -= adminBarHeight ;
        }
        if( html.parent().get(0) == sideContent.get(0) ) {
            heightViewPort -= ($('#mashhead').height() + 80);
        } else if ( html.parent().get(0) == secondarySidebar.get(0) ) {
        }
        html.height( heightViewPort );
        html.find('.scrollbar-inner').height( ( ( heightViewPort / scrollHeight ) * heightViewPort ) + 'px' );
        //BindEvent
        var moveScrollbar = function(event) {
            var sidebarTop = $('#mashhead').height() + 40;
            if( $('#wpadminbar').length > 0 ){
                var adminBarHeight = $('#wpadminbar').height();
                sidebarTop += adminBarHeight;
            }
            var mousePos = event.clientY;
            if( onScrollBar.parent().get(0) == sideContent.get(0) ) {
                mousePos -= sidebarTop;
            } else if( onScrollBar.parent().get(0) == secondarySidebar.get(0) ) {
                mousePos -= adminBarHeight;
            }
            var scrollbarInner = onScrollBar.find('.scrollbar-inner'),
                limitHeight = 0;
            scrollPos = mousePos - ( scrollbarInner.height() / 2 );  
            limitHeight = onScrollBar.height() - scrollbarInner.height();
            if( scrollPos < 0  ) { scrollPos = 0; }
            if( scrollPos > limitHeight    ) { scrollPos = limitHeight; }
            scrollbarInner.css({
                'margin-top'    : scrollPos
            });
            var movePercent = scrollPos / onScrollBar.height();
            if( onScrollBar.parent().get(0) == sideContent.get(0) ) {
                sideContent.scrollTop( movePercent * sideContent.get(0).scrollHeight );
            } else if( onScrollBar.parent().get(0) == secondarySidebar.get(0) ) {
                var secondaryInnerHeight =  secondarySidebar.find('.secondary-inner').height();
                var translateMove = movePercent * secondaryInnerHeight;
                translate( -translateMove, secondarySidebar.find('.secondary-inner'), 'px', true );              
            }
        }
        html.on('mousedown',function(event){
            onScrollBar = $(this);
            $(this).addClass('scrollbar-active');
            $(window).disableSelection();
            moveScrollbar(event);
        });
        $(window).on('mousemove mouseup',function(event){
            if( onScrollBar ) {
                if( 'mousemove' == event.type ) {
                    moveScrollbar(event);
                }
                if( 'mouseup' == event.type ) {
                    onScrollBar.removeClass('scrollbar-active');
                    onScrollBar = false;
                    $(window).enableSelection();
                }
            }
        });  
    }
    //Reset Scrollbar
    if( 'ontouchstart' in document.documentElement ) {
        secondarySidebar.on('touchstart',function(event){
            if( $(window).width() < 1200 ) {
                $(this).find('.scrollbar').css('opacity','1');       
            }
        }).on('touchend',function(event){
            $(this).find('.scrollbar').css('opacity','0');
        });
        sideContent.on('touchstart',function(event){
            if( $(window).width() > 1200 ) {
                $(this).find('.scrollbar').css('opacity','1');       
            }
        }).on('touchend',function(event){
            $(this).find('.scrollbar').css('opacity','0');
        });
    } else {
        secondarySidebar.hover(function(event){
            if( $(window).width() < 1200 ) {
                $(this).find('.scrollbar').css('opacity','1');       
            }
        },function(event){
            $(this).find('.scrollbar').css('opacity','0');
        });

        sideContent.hover(function(event){
            if( $(window).width() > 1200 ) {
                $(this).find('.scrollbar').css('opacity','1');       
            }
        },function(event){
            $(this).find('.scrollbar').css('opacity','0');
        });
    } 
    function resetScrollBar(){
        $('.scrollbar').each(function(index){
            var scrollbar = $(this),
                scrollbarInner = scrollbar.find('.scrollbar-inner'),
                heightViewPort = $(window).height();
            if( $('#wpadminbar').length > 0 ){
                var adminBarHeight = $('#wpadminbar').outerHeight();
                heightViewPort -= adminBarHeight ;
            }
            var scrollHeight = 0;
            if( scrollbar.parent().get(0) == sideContent.get(0) ) {
                heightViewPort -= ( mashheadHeight + 80);

                console.log( heightViewPort );
                scrollHeight = sideContent.get(0).scrollHeight;
            } else if ( scrollbar.parent().get(0) == secondarySidebar.get(0) ) {
                scrollHeight = secondarySidebar.find('.secondary-inner').height();
            }
            scrollbar.height( heightViewPort );
            scrollbarInner.height( ( ( heightViewPort / scrollHeight ) * heightViewPort ) + 'px' );
        });
    }
    $(window).on('resize',function(event){
        resetScrollBar();
        if( $(this).width() > 1200 ) {
            if( secondarySidebar.find('.scrollbar').length > 0 ) {
                secondarySidebar.find('.scrollbar').hide();
            }
        }
    });
    $(document).ready(function($) {
        $('#main-content').delegate('#comment','focus', function(){
            $('#commentform').addClass('active');
            $('.comment-form-comment textarea').autosize();
        });
        $('#main-content').delegate('.wpcf7-textarea','focus', function(){
            $('.wpcf7-textarea').autosize();
        });
    });
})(jQuery);