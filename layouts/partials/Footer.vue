<template>
    <div class="footer-main">
        <div class="feedback-section">
            <div class="container">
                <div class="feedback-row">
                    <div class="feedback-data">
                        <div class="feedback-info">
                            <div class="feedback-box">
                                <h3>War diese Seite hilfreich?</h3>
                                <div class="feedback-btns">
                                    <b-button type="is-secondary feedback_yes">Ja</b-button>
                                    <b-button type="is-secondary feedback_trigger">Nein</b-button>
                                </div>
                            </div>
                            <div class="feedback-form">
                                <form action="#" @submit.prevent="submit">
                                    
                                    <b-field label="Message" :class="{ 'hasError': $v.form.feedback.$error }">
                                        <b-input type="textarea" placeholder="Was hätten Sie auf dieser Seite erwartet? Ihr Feedback hilft uns die Seite zu verbessern." v-model="form.feedback"></b-input>
                                    </b-field>
                                    <div class="feedback-submit">
                                        <div class="feedback-contact">
                                            <p>Für Fragen sind wir zu den <a href="#" class="underline"><span class="line">Amtszeiten</span></a> unter <a href="tel:+4351253600" class="underline"><span class="line">+43 512 5360 0</span></a> für Sie erreichbar.</p>
                                        </div>
                                        <div class="feedback-submit-btn">
                                            <b-button type="is-secondary" native-type="submit">Feedback absenden</b-button>
                                        </div>
                                    </div>
                                </form>
                                <div class="form-error" v-if="$v.form.$error">
                                    Feedback requires at least 5 characters
                                </div>
                            </div>
                        </div>
                        <div class="feedback-result">
                            <h3>Vielen Dank für Ihr Feedback.</h3>
                            <p>Für Fragen sind wir zu den <a href="#" class="underline"><span class="line">Amtszeiten</span></a> unter <a href="tel:+4351253600" class="underline"><span class="line">+43 512 5360 0</span></a> für Sie erreichbar.</p>
                        </div>
                    </div>
                    <div class="scroll-top">
                        <a href="#" class="underline" id="backtotop"><span class="line">Zurück zum Anfang</span> <em class="icon-arrow-right">Arrow</em></a>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div v-if="isHidden" class="footer-top">
                <div class="container">
                    <div class="footer-top-row">
                        <div class="footer-title">Landeshauptstadt Innsbruck</div>
                        <div class="footer-contact">
                            <div class="columns">
                                <div class="column">
                                    <div class="footer-contact-box">
                                        <a href="#" class="underline">
                                            <em class="icon-location">Icon location</em>
                                            <span class="line">Maria-Theresien-Straße 18 A-6020 Innsbruck</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="footer-contact-box">
                                        <a href="tel:+4351253600" class="underline">
                                            <em class="icon-phone">Icon call</em>
                                            <span class="line">+43 512 5360 0</span>
                                        </a>
                                        <a href="mailto:kontakt@innsbruck.gv.at" class="underline">
                                            <em class="icon-mail">Icon mail</em>
                                            <span class="line">kontakt@innsbruck.gv.at</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="footer-bottom-row">
                        <ul class="f-links">
                            <li><a href="#" class="underline"><span class="line">Kontakt</span></a></li>
                            <li><a href="#" class="underline"><span class="line">Datenschutz</span></a></li>
                            <li><a href="#" class="underline"><span class="line">Impressum</span></a></li>
                            <li><a href="#" class="underline cookie-settings-trigger"><span class="line">Cookie Einstellungen</span></a></li>
                            <li><a href="#" class="underline"><span class="line">Barrierefreiheitserklärung</span></a></li>
                        </ul>
                        <ul class="f-social">
                            <li><a href="#"><em class="icon-instagram">Icon instagram</em></a></li>
                            <li><a href="#"><em class="icon-facebook">Icon facebook</em></a></li>
                            <li><a href="#"><em class="icon-twitter">Icon twitter</em></a></li>
                            <li><a href="#"><em class="icon-youtube">Icon youtube</em></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength } from "vuelidate/lib/validators";
    export default {
        name: "Footer",
        props: ["isHidden"],
        data() {
            return {
                form: {
                    feedback: "",
                }
            };
        },
        validations: {
            form: {
                feedback: { required, min: minLength(5) }
            }
        },
        methods: {
            submit() {
            this.$v.form.$touch();
            if(this.$v.form.$error) return
                // to form submit after this
                // alert('Form submitted')
                if($('.feedback-form').is(':visible')){
                    $('.feedback-info').slideUp(400, function(){
                        $('.feedback-form').hide();
                        $('.feedback_trigger').removeClass('active');
                        setTimeout(function () { 
                            $('.feedback-result').fadeIn(400);
                        },50)
                    });
                }
                if ($(window).width() < 1024) {
                    $('html, body').animate({ 
                        scrollTop: $('.feedback-section').offset().top - ($('#header').outerHeight() + 14)
                    }, 250);
                }
            }
        },
        mounted() {
            $("#backtotop").click(function () {
                $("html, body").animate({scrollTop: 0});
                return false
            });

            $(document).on('click', '.feedback_trigger', function(){
                $(this).addClass('active');
                var feedback_area = $('.feedback-form textarea');
                $('.feedback-form').slideDown('normal', function(){
                    $(feedback_area).focus();
                });
                return false;
            });

            // $(document).on('click', '.feedback-submit-btn .button, .feedback_yes', function(){
            $(document).on('click', '.feedback_yes', function(){
                if($('.feedback-form').is(':visible')){
                    $('.feedback-info').slideUp(400, function(){
                        $('.feedback-form').hide();
                        $('.feedback_trigger').removeClass('active');
                        setTimeout(function () { 
                            $('.feedback-result').fadeIn(400);
                        },50)
                    });
                } else {
                    $('.feedback-info').fadeOut(400);
                    $('.feedback-result').fadeIn(400);
                }
                if ($(window).width() < 1024) {
                    $('html, body').animate({ 
                        scrollTop: $('.feedback-section').offset().top - ($('#header').outerHeight() + 14)
                    }, 250);
                }
                return false;
            });
        }
    }
</script>