;(function($, window, document, undefined) { 
	
	//Genaral Global variables
	var $win = $(window);
	var $doc = $(document);  
	var subnavTop = 0;
	var $winW = function(){ return $(window).width(); };
	var $winH = function(){ return $(window).height(); };
	var currentposition = 0;
	var body_current_pos = 0;
	var $screensize = function(element){  
        $(element).width($winW()).height($winH());
    };
		 
    var screencheck = function(mediasize){
        if (typeof window.matchMedia !== "undefined"){
            var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
            if( screensize.matches ) {
                return true;
            }else {
                return false; 
            }
        } else { // for IE9 and lower browser
            if( $winW() <=  mediasize ) {
                return true;
            }else {  
                return false;
            }
        }
    };

    $doc.ready(function() {

        // Navigation
        function NavHeaderHeight() {
            var navHeaderHeight = $('#header').outerHeight();
            $('.nav-main-row').css('padding-top', navHeaderHeight);
        }
        function HeaderHeight() {
            // var headerHeight = $('.header-main').outerHeight();
            var headerHeight = $('#header').outerHeight();
            $('.page-banner').css('padding-top', headerHeight);
        }
        NavHeaderHeight();
        HeaderHeight();
        var animDuration = 0.45;
		var easeVal = "expo.inOut";
		// CustomEase.create("hop", "M0,0 C0.24,0 0.308,0.517 0.412,0.698 0.556,0.95 0.714,0.974 1,1 ");

        // var manuWidth = $('#menu').width();
        // $('#menu').width(manuWidth);

        $(document).on('click', '#menu', function(){

            // var manuWidth = $(this).width();
            // $('#menu').width(manuWidth);
            
            if($('#navigation').is(':hidden')) {
                // For navigation open
                setTimeout(function(){
                    $('#header').addClass('active');
                }, 150)
                NavHeaderHeight();
                $(this).addClass('active');
                $(this).find('em').text('Schließen');
                setTimeout(function(){
                    $('#menu .menu-wrap').removeAttr("style");
                    var manuWidth = $('#menu em').width();
                    // $('#menu em').width(manuWidth);
                    gsap.to('#menu .menu-wrap', {
                        width: manuWidth,
                        duration: animDuration,
                        ease: easeVal
                    });
                }, 10)
                $('.navigation-overlay').fadeIn(450);
                setTimeout (function(){
                    $('#header').addClass('nav-active');
                }, 450)
                $('#navigation').show(0, function(){
                    gsap.to("#navigation", {
                        height: 'auto',
                        duration: animDuration,
                        // duration: 5,
                        ease: easeVal
                    });
                    // gsap.fromTo(".header-main", { boxShadow:'0 0 0 0 #F3F4F6' }, { boxShadow:'0 0 0 2px #F3F4F6', duration:animDuration, ease: easeVal});
                    gsap.fromTo(".menu li", {opacity: 0, y: '-25px'}, {opacity: 1, y: '0', stagger: 0.02, duration:animDuration, ease: easeVal, delay: 0.15});
                    gsap.fromTo(".nav-list li", {opacity: 0, y: '-30px'}, {opacity: 1, y: '0', stagger: 0.03, duration:animDuration, ease: easeVal, delay: 0.2});
                    if (!screencheck(768)) {
                        gsap.fromTo("#header:not(.search_visible) .header-search", {opacity: 0, y: '-20px', visibility: 'hidden'}, {opacity: 1, y: '0', visibility: 'visible', duration:animDuration, ease: easeVal, delay:0.15 });
                    }

                    if (screencheck(768)) {
                        if($('body').hasClass('home') && !$('.search-trigger').hasClass('scroll-search-active')){
                            if(!$('.search-trigger').hasClass('nav-search-active')) {
                                $('.search-trigger').addClass('nav-search-active');
                                gsap.fromTo(".search-trigger", {opacity: 0, y: '-20px'}, {opacity: 1, y: '0',  duration:animDuration, ease: easeVal, delay: 0.2 });
                            }
                        }
                    }
                })
            } else {
                // For navigation close
                $('#header').removeClass('nav-active');
                $(this).removeClass('active');
                $('.navigation-overlay').fadeOut(450);
                // gsap.fromTo(".header-main", { boxShadow:'0 0 0 2px #F3F4F6' }, { boxShadow:'0 0 0 0 #F3F4F6', duration: 0.2, ease: easeVal});
                setTimeout (function(){
                    $('#menu').find('em').text('Menü');
                    setTimeout(function(){
                        $('#menu .menu-wrap').removeAttr("style");
                        manuWidth = $('#menu em').width();
                        // $('#menu em').width(manuWidth);
                        gsap.to('#menu .menu-wrap', {
                            width: manuWidth,
                            duration: animDuration,
                            ease: easeVal
                        });
                    }, 10)
                    // $('#header').removeClass('nav-active');
                }, 200)
                setTimeout (function(){
                    $('#header').removeClass('active');
                }, 300)
                if (!screencheck(768)) {
                    gsap.fromTo("#header:not(.search_visible) .header-search", {opacity: 1, y: '0', visibility: 'visible'}, {opacity: 0, y: '-20px', visibility: 'hidden', duration:animDuration, ease: easeVal});
                }
                gsap.to("#navigation", {
                    height: '0',
                    duration: animDuration,
                    ease: easeVal
                });
                setTimeout (function(){
                    $('#navigation').hide(0);
                }, 450)

                if (screencheck(768)) {
                    if($('.search-trigger').hasClass('nav-search-active')) {
                        $('.search-trigger').removeClass('nav-search-active');
                        gsap.fromTo(".search-trigger", {opacity: 1, y: '0'}, {opacity: 0, y: '-20px', clearProps: true, duration:animDuration, ease: easeVal });
                    }
                }
                
            }
            

            return false
        });

        $('body').on('click', function(e) {
            if($('#navigation').is(':visible')) {
                if($(e.target).parents(".navigation-row").length === 0 && $(e.target).parents(".header-search").length === 0 ) {
                    // For navigation close
                    $('#menu').removeClass('active');
                    $('.navigation-overlay').fadeOut(450);
                    setTimeout (function(){
                        $('#menu').find('em').text('Menü');
                        setTimeout(function(){
                            $('#menu .menu-wrap').removeAttr("style");
                            var manuWidth = $('#menu em').width();
                            // $('#menu em').width(manuWidth);
                            gsap.to('#menu .menu-wrap', {
                                width: manuWidth,
                                duration: animDuration,
                                ease: easeVal
                            });
                        }, 10)
                        $('#header').removeClass('nav-active');
                    }, 200)
                    if (!screencheck(768)) {
                        gsap.fromTo("#header:not(.search_visible) .header-search", {opacity: 1, y: '0'}, {opacity: 0, y: '-20px', duration:animDuration, ease: easeVal});
                    }
                    gsap.to("#navigation", {
                        height: '0',
                        duration: animDuration,
                        ease: easeVal
                    });
                    setTimeout (function(){
                        $('#header').removeClass('active');
                        $('#navigation').hide(0);
                    }, 450)

                    if (screencheck(768)) {
                        if($('.search-trigger').hasClass('nav-search-active')) {
                            $('.search-trigger').removeClass('nav-search-active');
                            gsap.fromTo(".search-trigger", {opacity: 1, y: '0'}, {opacity: 0, y: '-20px', clearProps: true, duration:animDuration, ease: easeVal });
                        }
                    }
                }
            }
        });


        // Mobile search only for homepage
        window.addEventListener('scroll',(event) => {
            if (screencheck(768)) {
                if( $(document).scrollTop() > 10 && $('body').hasClass('home') && !$('.search-trigger').hasClass('nav-search-active') ) {
                    if(!$(".search-trigger").hasClass('scroll-search-active')) {
                        $(".search-trigger").addClass('scroll-search-active')
                        gsap.fromTo(".search-trigger", {opacity: 0, y: '20px'}, {opacity: 1, y: '0',  duration:animDuration, ease: easeVal });
                    }
                } else {
                    if($(".search-trigger").hasClass('scroll-search-active')) {
                        $(".search-trigger").removeClass('scroll-search-active')
                        gsap.fromTo(".search-trigger", {opacity: 1, y: '0'}, {opacity: 0, y: '20px', clearProps: true, duration:animDuration, ease: easeVal });
                    }
                }
            }
		}, {passive: true});

        // Hide search suggestions on window scroll globally
        const scrollerblock = document.querySelector("body");
        window.addEventListener('scroll',(event) => {
            if (document.activeElement instanceof HTMLElement && window.scrollY >= 150 ){
                //console.log(window.scrollY);
                document.activeElement.blur();
                document.body.click();
            }

            NavHeaderHeight();
            //console.log(window.scrollY);
        }, {passive: true});

        // $(window).on('scroll', function(){
        //     NavHeaderHeight();
        // });


        // Autocomplete 
        $('body').on('keyup', '.autocomplete .input', function(){
			if(!$(this).val() == ''){
				$(this).parents('.autocomplete').addClass('not-empty');
			} else {
				$(this).parents('.autocomplete').removeClass('not-empty');
			}
		})
        // $('.autocomplete .input').each(function(){
        //     var $this = $(this);
        //     console.log($this)
        // })
       
		
    });

})(jQuery, window, document);