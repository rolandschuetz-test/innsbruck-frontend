<template>
    <div class="popouterbox" :id="lightboxID">
        <div class="popup-main">
            <div class="popup-block">
                <a href="#" class="close-dialogbox">Schließen 
                    <div class="nav-bars">
                        <span class="bar bar1"></span>
                        <span class="bar bar3"></span>
                    </div>
                </a>
                <div class="pop-contentbox">
                    <div class="pop-lightbox">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lightbox',
        props: {
            lightboxID: {
                type: String
            }
        },
        mounted() {
            /* Popup function
		    ---------------------------------------------------------------------*/
		    var $dialogTrigger = $('.poptrigger'),
		        $pagebody =  $('body');
            $dialogTrigger.click( function(){
                var popID = $(this).attr('data-rel');
                $('html').addClass('overflowhidden');
                var winHeight = $(window).height();
                $('#' + popID).fadeIn();
                var popheight = $('#' + popID).find('.popup-block').outerHeight(true);
                
                
                if(!$('#' + popID + ' .modal-backdrop').length) {
                    $('#' + popID + ' .popup-main').append("<div class='modal-backdrop'></div>");
                }
                $('.popouterbox .modal-backdrop').fadeTo(250, 1);
                if( popheight > winHeight ){

                } 
                $('#' + popID).focus();
                return false;
            });
		
            $(window).on("resize", function () { 
                if( $('.popouterbox').length && $('.popouterbox').is(':visible')){
                    var popheighton = $('.popouterbox .pop-contentbox').height()+60;
                    var winHeight = $(window).height();
                    if( popheighton > winHeight ){
                        $('.popouterbox .popup-main').addClass('taller');
                        
                    } else {
                        $('.popouterbox .popup-main').removeClass('taller');
                    }	
                }
            });
		
		    //Close popup
            $(document).on('click', '.close-dialogbox, .modal-backdrop', function(){
                $(this).parents('.popouterbox').fadeOut(300, function(){
                    $(this).find('.modal-backdrop').fadeOut(250, function(){
                        $('html').removeClass('overflowhidden');
                        $(this).remove();
                    });
                });
                return false;
            });

            // ESC close
            $('body').on('keyup', function(e) {
                e.stopImmediatePropagation();
                if (e.key == "Escape") {
                    if($('.popouterbox').is(':visible')) {
                        $('.popouterbox').fadeOut(300, function(){
                            $(this).find('.modal-backdrop').fadeOut(250, function(){
                                $('html').removeClass('overflowhidden');
                                $(this).remove();
                            });
                        });
                    }
                }
            })
            
            var easeVal = "expo.inOut";

            $(".close-dialogbox").hover(function () {
                gsap.fromTo(".nav-bars .bar1", { rotation: -45 }, { rotation: 0, duration: 0.25, ease: easeVal });
			    gsap.fromTo(".nav-bars .bar3", { rotation: 45 }, { rotation: 0, duration: 0.25, ease: easeVal });
            }, function () {
                gsap.fromTo(".nav-bars .bar1", { rotation: 0 }, { rotation: -45, duration: 0.25, ease: easeVal });
				gsap.fromTo(".nav-bars .bar3", { rotation: 0 }, { rotation: 45, duration: 0.25, ease: easeVal });
            });
        }
    }
</script>