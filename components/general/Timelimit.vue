<template>
    <div class="timelimit-section">
        <div class="timelimit-main">
            <a href="#" class="timelimit-close"><em class="icon-burger-close-desktop">Icon Close</em></a>
            <div class="container">
                <div class="timelimit-row">
                    <div class="timelimit-box">
                        <h2>Noch Fragen offen?</h2>
                        <p>Kontaktieren Sie uns. Wir kümmern uns gerne persönlich um Ihre Anliegen.</p>
                    </div>
                    <div class="timelimit-btns">
                        <b-button type="is-secondary timelimit-no">Nein danke</b-button>
                        <nuxt-link to="contact" class="button contact-link"><span>Zur Kontaktseite</span> <span class="icon is-small"><i class="mdi mdi-tip-right"></i></span></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="timeline-backdrop">Timeline Overlay</div>
    </div>
</template>

<script>
    export default {
        name: "Timelimit",
        mounted() {
            setTimeout(function(){
                $('.timelimit-section').fadeIn(350);
            }, 5000)
            $(document).on('click', '.timelimit-close, .timelimit-no, .timeline-backdrop', function(){
                $(this).parents('.timelimit-section').fadeOut(350);
                return false
            });

            // Remove Timelimit Section from contact page
            if($('.contact-link').hasClass('nuxt-link-exact-active')) {
                $('.timelimit-section').remove();
            }
        }
    }
</script>
