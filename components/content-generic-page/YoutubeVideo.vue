<template>
    <div class="youtube-video-block">
        <div class="youtube-video-box">
            <div ref="youtubeVideo" class="youtube-video" :data-embed="youtubeVideoUrl" data-previewImage="/fileadmin/_processed_/6/d/csm_test_5e81ab31d7.png">
                <button class="youtube-play" type="button"><span class="play-img">Video Play</span></button>
            </div>
            <div class="youtube-video-caption">
                <p>{{ youtubeCaption }}</p>
                <a :href="youtubeExternalUrl" rel="noreferrer" target="_blank">{{ youtubeExternalText }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "youtube-video",
        props: {
            youtubeVideoUrl: {
                type: String,
                required: true
            },
            youtubeCaption: {
                type: String,
                required: true
            },
            youtubeExternalUrl: {
                type: String,
                required: true
            },
            youtubeExternalText: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                rounded: false,
            }
        },
        mounted() {
            var youtube = this.$refs.youtubeVideo;
            var source = "https://img.youtube.com/vi/"+ youtube.dataset.embed +"/sddefault.jpg";
            var image = new Image();
            image.src = source;
            image.alt = "Youtube Poster Image";
            image.addEventListener( "load", function() {
                youtube.appendChild( image );
            });

            youtube.addEventListener( "click", function() {
                var checkCookie = $.cookie('YOUTUBE-COOKIE');
                if(checkCookie == 1) {
                    var iframe = document.createElement( "iframe" );
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "allowfullscreen", "" );
                    iframe.setAttribute( "src", "https://www.youtube-nocookie.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
                    this.innerHTML = "";
                    this.appendChild( iframe );
                } else {

                    if(!$(this).find('.youtube-cookie-info').length) {
                        
                        var youtubeInfoDiv = '<div class="youtube-cookie-info"><p>Bitte aktivieren Sie die Social-Media Cookies in den <a href="#" class="underline white cookie-settings-trigger"><span class="line">Cookie Einstellungen</span</a></p></div>'
                        $(youtube).append( youtubeInfoDiv );
                    }

                }
            } );

        }
    }
</script>