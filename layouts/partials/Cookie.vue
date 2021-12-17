<template>
    <div class="cookie-section">
        <div class="cookie-small">
            <div class="container">
                <div class="cookie-small-main">
                    <div class="cookie-small-data">
                        <h2>Diese Website verwendet Cookies</h2>
                        <p>Wenn Sie auf „Alle akzeptieren“ klicken, stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Websitenavigation zu verbessern, die Websitenutzung zu analysieren und unsere Marketingbemühungen zu unterstützen. Für weitere Informationen lesen Sie bitte unsere <a href="#" class="underline red-500"><span class="line">Datenschutzerklärung</span></a>.</p>
                    </div>
                    <div class="cookie-small-btn">
                        <b-button type="is-secondary cookie-settings-trigger" size="is-small">Cookie-Einstellungen</b-button>
                        <b-button type="is-primary cookie-accept" size="is-small">Alle akzeptieren</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="cookie-settings">
            <div class="cookie-setting-box">
                <a href="#" class="cookie-close"><em class="icon-burger-close">Close Icon</em></a>
                <div class="cookie-main">
                    <div class="cookie-main-box">
                        <div class="cookie-head">
                            <h4>Cookie Einstellungen</h4>
                            <p>Wir nutzen Cookies um die Websitenavigation zu verbessern und die Websitenutzung zu analysieren. Die Blockierung bestimmter Arten von Cookies kann jedoch zu einer beeinträchtigten Erfahrung mit der von uns zur Verfügung gestellten Website und Dienste führen. Bitte treffen Sie hier Ihre Cookie-Einstellungen.</p>
                        </div>
                        <div class="cookie-body">
                            <form action="#">
                                <fieldset>
                                    <legend>Cookie checkbox</legend>
                                    <div class="cookie-block">
                                        <b-field>
                                            <b-checkbox :value="true" disabled>Unbedingt erforderliche Cookies</b-checkbox>
                                        </b-field>
                                        <div class="cookie-data">
                                            <b-collapse :open="false" position="is-bottom" aria-id="necessary_cookies" animation="slide">
                                                <template #trigger="props">
                                                    <b-button
                                                        :label=" !props.open ? 'Mehr anzeigen' : 'Weniger anzeigen' "
                                                        @click="isOpen = !isOpen"
                                                        :class="props.open ? 'open' : ''"
                                                        aria-controls="necessary_cookies" />
                                                </template>
                                                <div class="cookie-info">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo, pellentesque ligula feugiat rutrum egestas ridiculus. Commodo ac quis pulvinar amet ullamcorper lacus, ut arcu mattis. Egestas tortor lectus enim nunc, nibh sit nunc. Purus euismod ut nibh in consectetur. Posuere habitasse metus, et et.</p>
                                                </div>
                                            </b-collapse>
                                        </div>
                                    </div>
                                    <div class="cookie-block">
                                        <b-field>
                                            <b-checkbox id="functional-cookies-checkbox">Funktionelle Cookies</b-checkbox>
                                        </b-field>
                                        <div class="cookie-data">
                                            <b-collapse :open="false" position="is-bottom" aria-id="functional_cookies" animation="slide">
                                                <template #trigger="props">
                                                    <b-button
                                                        :label=" !props.open ? 'Mehr anzeigen' : 'Weniger anzeigen' "
                                                        @click="isOpen = !isOpen"
                                                        :class="props.open ? 'open' : ''"
                                                        aria-controls="functional_cookies" />
                                                </template>
                                                <div class="cookie-info">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo, pellentesque ligula feugiat rutrum egestas ridiculus. Commodo ac quis pulvinar amet ullamcorper lacus, ut arcu mattis. Egestas tortor lectus enim nunc, nibh sit nunc. Purus euismod ut nibh in consectetur. Posuere habitasse metus, et et.</p>
                                                </div>
                                            </b-collapse>
                                        </div>
                                    </div>
                                    <div class="cookie-block">
                                        <b-field>
                                            <b-checkbox id="performance-cookies-checkbox">Leistungsrelevante Cookies</b-checkbox>
                                        </b-field>
                                        <div class="cookie-data">
                                            <b-collapse :open="false" position="is-bottom" aria-id="performance_cookies" animation="slide">
                                                <template #trigger="props">
                                                    <b-button
                                                        :label=" !props.open ? 'Mehr anzeigen' : 'Weniger anzeigen' "
                                                        @click="isOpen = !isOpen"
                                                        :class="props.open ? 'open' : ''"
                                                        aria-controls="performance_cookies" />
                                                </template>
                                                <div class="cookie-info">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo, pellentesque ligula feugiat rutrum egestas ridiculus. Commodo ac quis pulvinar amet ullamcorper lacus, ut arcu mattis. Egestas tortor lectus enim nunc, nibh sit nunc. Purus euismod ut nibh in consectetur. Posuere habitasse metus, et et.</p>
                                                </div>
                                            </b-collapse>
                                        </div>
                                    </div>
                                    <div class="cookie-block">
                                        <b-field>
                                            <b-checkbox id="social-media-cookies-checkbox">Social Media Cookies</b-checkbox>
                                        </b-field>
                                        <div class="cookie-data">
                                            <b-collapse :open="false" position="is-bottom" aria-id="social_media_cookies" animation="slide">
                                                <template #trigger="props">
                                                    <b-button
                                                        :label=" !props.open ? 'Mehr anzeigen' : 'Weniger anzeigen' "
                                                        @click="isOpen = !isOpen"
                                                        :class="props.open ? 'open' : ''"
                                                        aria-controls="social_media_cookies" />
                                                </template>
                                                <div class="cookie-info">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo, pellentesque ligula feugiat rutrum egestas ridiculus. Commodo ac quis pulvinar amet ullamcorper lacus, ut arcu mattis. Egestas tortor lectus enim nunc, nibh sit nunc. Purus euismod ut nibh in consectetur. Posuere habitasse metus, et et.</p>
                                                </div>
                                            </b-collapse>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="cookie-btn-box">
                    <b-button type="is-primary cookie-save">Einstellungen speichern</b-button>
                </div>
            </div>
            <div class="cookie-backdrop">Cookie Backdrop Overlay</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cookie",
        mounted() {
            
			var cookieshowhide = $.cookie('SET-COOKIE');
			if(!cookieshowhide == 1) {
				setTimeout(function () {
					$(".cookie-small").fadeIn('normal');
						$('body').removeClass('cookieset');
				}, 2500)
			}

            $('body').on('click', '.cookie-accept', function(){
                $.cookie("SET-COOKIE", 1, { expires : 1000 });
                $.cookie("YOUTUBE-COOKIE", 1, { expires : 1000 });
                $('.cookie-block input[type="checkbox"]').prop("checked", true);
                $("body").removeClass('cookieset').removeAttr('aria-hidden');
                $(this).parents('.cookie-small').fadeOut(250);
                $('.youtube-video').each(function(){
                    var $this = $(this);
                    if($this.find('.youtube-cookie-info').length) {
                        $this.find('.youtube-cookie-info').remove();
                    }
                })
                return false
            })
            $('body').on('click', '.cookie-save', function(){

                // Click on footer link
                var youtubeCookie = $.cookie('YOUTUBE-COOKIE');
                if(youtubeCookie == 1 && $('#social-media-cookies-checkbox input[type="checkbox"]').is(':checked') == false){
                    $.cookie("YOUTUBE-COOKIE", 0, { expires : 0 });
                    $('.youtube-video').each(function(){
                        var $this = $(this);
                        if($this.find('iframe').length) {
                            $this.find('iframe').remove();
                            var source = "https://img.youtube.com/vi/"+ $this.data('embed') +"/sddefault.jpg";
                            var image = new Image();
                            image.src = source;
                            image.alt = "Youtube Poster Image";
                            image.addEventListener( "load", function() {
                                $this.append( "<button class='youtube-play' type='button'><span class='play-img'>Video Play</span></button>" );
                                $this.append( image );
                            });
                            var youtubeInfoDiv = '<div class="youtube-cookie-info"><p>Bitte aktivieren Sie die Social-Media Cookies in den <a href="#" class="underline white cookie-settings-trigger"><span class="line">Cookie Einstellungen</span</a></p></div>'
                            $($this).append( youtubeInfoDiv );
                            
                        }
                    })
                }

                if ( ($('#functional-cookies-checkbox input[type="checkbox"]').is(':checked') || $('#performance-cookies-checkbox input[type="checkbox"]').is(':checked')) && $('#social-media-cookies-checkbox input[type="checkbox"]').is(':checked') ){
                    $.cookie("SET-COOKIE", 1, { expires : 1000 });
                    $.cookie("YOUTUBE-COOKIE", 1, { expires : 1000 });
                    $("body").removeClass('cookieset').removeAttr('aria-hidden');
                    $('.youtube-video').each(function(){
                        var $this = $(this);
                        if($this.find('.youtube-cookie-info').length) {
                            $this.find('.youtube-cookie-info').remove();
                        }
                    })
                }
                else if ( $('#functional-cookies-checkbox input[type="checkbox"]').is(':checked') || $('#performance-cookies-checkbox input[type="checkbox"]').is(':checked') ){
                    $.cookie("SET-COOKIE", 1, { expires : 1000 });
                    $('.cookie-small').fadeOut(250);
                    $("body").removeClass('cookieset').removeAttr('aria-hidden');
                }
                else if ( $('#social-media-cookies-checkbox input[type="checkbox"]').is(':checked') ){
                    $.cookie("YOUTUBE-COOKIE", 1, { expires : 1000 });
                    $('.cookie-small').fadeOut(250);
                    $("body").removeClass('cookieset').removeAttr('aria-hidden');
                    $('.youtube-video').each(function(){
                        var $this = $(this);
                        if($this.find('.youtube-cookie-info').length) {
                            $this.find('.youtube-cookie-info').remove();
                        }
                    })
                }
                $(this).parents('.cookie-settings').fadeOut(250);
                return false;
                
            })

            $(document).on('click', '.cookie-settings-trigger', function(){
                $('.cookie-small').fadeOut(250);
                $('.cookie-settings').fadeIn(250);
                return false
            })

            // $(document).on('click', '.cookie-footer-trigger', function(){
            //     $('.cookie-block input[type="checkbox"]').prop("checked", true);
            //     $('.cookie-small').fadeOut(250);
            //     $('.cookie-settings').fadeIn(250);
            //     return false
            // })

            $(document).on('click', '.cookie-close, .cookie-backdrop', function(){
                $(this).parents('.cookie-settings').fadeOut(250);
                $('.cookie-small').fadeIn(250);
                return false
            })
        }
    }
    
</script>