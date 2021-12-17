<template>
    <header id="header" :class="{ search_visible: isVisible }">
        <Info infoType="is-danger">
            <span class="line" v-if="ie11">Aufgrund von Kompatibilitätsprobleme kommt es zu Darstellungsfehler im Internet Explorer 11. Bitte benutzen Sie daher einen aktuellen Browser.</span>
            <span class="line" v-else>Alle Informationen zum Coronavirus COVID-19</span>
        </Info>
        <div class="header-main">
            <div class="container">
                <div class="header-row">
                    <div class="header-left">
                        <div class="menu-box">
                            <a href="#" id="menu" class="menulines-button" tabindex="0">
                                <span class="menulines-row">
                                    <span class="menulines"></span>
                                </span>
                                <div class="menu-wrap">
                                    <em>Menü</em>
                                </div>
                                Navigation Menu
                            </a>
                        </div>
                        <div class="header-search search-field">
                            <a href="#" class="search-trigger"><em class="icon-search">Icon search</em></a>
                            <b-field label="Find a name">
                                <b-autocomplete
                                    v-model="name"
                                    placeholder="Suchen..."
                                    :keep-first="keepFirst"
                                    :open-on-focus="openOnFocus"
                                    :data="filteredDataObj"
                                    field="user.first_name"
                                    @select="option => (selected = option)"
                                    :clearable="clearable"
                                >
                                </b-autocomplete>
                            </b-field>
                        </div>
                    </div>
                    <div class="header-right">
                        <div class="header-controls">
                            <a href="https://ls.innsbruck.gv.at/" class="underline" rel="noreferrer"><span class="line">Leichte Sprache</span></a>
                            <div class="language-box"> 
                                <a href="#" class="language-trigger">Deutsch</a>
                                <ul>
                                    <li class="active"><a href="#">Deutsch</a></li>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">Italiano</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="logo-box">
                            <nuxt-link to="sitemap" id="logo">
                                <img
                                src="~assets/logo.svg"
                                alt="INNS' BRUCK"
                                height="65"
                                >
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Navigation></Navigation>
    </header>
    
</template>

<script>
    import Info from '~/components/general/Info';
    import Navigation from './Navigation';
    import { ScreenCheck } from '~/static/assets/js/utils.js';
    const data = require('@/data/search.json');
    export default {
        name: "default-header",
        components: {
            Info,
            Navigation,
        },
        props: ["isVisible"], 
        data() {
            var pageData = {
                data,
                keepFirst: false,
                openOnFocus: true,
                name: '',
                selected: null,
                clearable: false,
                ie11: !!window.MSInputMethodContext && !!document.documentMode,
            }
            return pageData
        },
        computed: {
            filteredDataObj() {
                return this.data.filter(option => {
                    return (
                        option.user.first_name
                            .toString()
                            .toLowerCase()
                            .indexOf(this.name.toLowerCase()) >= 0
                    )
                })
            }
        },
        mounted() {
           
            $(document).on('click', '.language-trigger', function(){
                if($(this).parent('.language-box').hasClass('open')) {
                    $(this).removeClass('active');
                    $(this).parent('.language-box').removeClass('open');
                } else {
                    $(this).addClass('active');
                    $(this).parent('.language-box').addClass('open');
                }
                return false
            });

            $(document).on('click', function(e) {
                if($(e.target).parents(".language-box").length===0 ) {
                    $('.language-box').removeClass('open');
                    $('.language-trigger').removeClass('active');
                }
            });

            $(document).on('click', '.search-trigger', function(){
                if($('.header-search .field').is(':visible')) {
                    $('.header-search .field').fadeOut(350);
                    $(this).removeClass('active');
                } else {
                    $('.header-search .field').fadeIn(350);
                    setTimeout(function () {
                        $('.header-search .field .input').focus();
                    }, 100);
                    $(this).addClass('active');
                }
                return false
            });

            const endVal = "top+=150";
            const endValMob = "top+=40";
            const headerMain = document.querySelector('.header-main');
            
                    
            window.addEventListener("resize", () => {
                
            });

            
            // header-main Trigger
            const headerTrigger = (passHeight, passEnd) => {
               gsap.to($('.header-main'), { 
                    height: passHeight, 
                    ease: "none",
                    backgroundColor:"rgba(255,255,255,1)",
                    boxShadow:'0 0 0 2px #F3F4F6',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: 'body',
                        start: "top top",
                        end: passEnd,
                        scrub: true,
                        toggleActions: "reset none none none",
                        markers: false,
                    } 
                });
            };

            // language-box Trigger
            const languageTrigger = (passMarginLeft, passEnd) => {
               gsap.to($('.language-box'), {
                    marginLeft: passMarginLeft,
                    ease: "none",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: 'body',
                        start: "top top",
                        end: passEnd,
                        scrub: true,
                        toggleActions: "reset none none none",
                        markers: false,
                    } 
                });
            };

            // language-box Trigger
            const logoBoxTrigger = (passMarginLeft, passEnd) => {
               gsap.to($('.logo-box'), {
                    marginLeft: passMarginLeft,
                    ease: "none",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: 'body',
                        start: "top top",
                        end: passEnd,
                        scrub: true,
                        toggleActions: "reset none none none",
                        markers: false,
                    } 
                });
            };

            // Logo Trigger
            const logoTrigger = (passWidth, passEnd) => {
               gsap.to($('#logo'), {
                    width:passWidth,
                    ease: 'none',
                    scrollTrigger: {
                        start: "top top",
                        end: passEnd,
                        scrub:  true,
                        toggleActions: "reset none none none",
                    }
                });  
            };
            
            
            ScrollTrigger.matchMedia({
	
                // desktop
                "(min-width: 1200px)": function() {
                    headerTrigger(80, endVal);
                    languageTrigger(48, endVal);
                    logoBoxTrigger(48, endVal);
                    logoTrigger(99, endVal);
                },

                // medium
                "(min-width: 992px) and (max-width: 1199px)": function() {
                    gsap.set(".header-main", { height: 120 });
                    headerTrigger(104, endVal);
                    gsap.set(".language-box", { marginLeft: 40 });
                    languageTrigger(32, endVal);
                    gsap.set(".logo-box", { marginLeft: 40 });
                    logoBoxTrigger(32, endVal);
                    gsap.set("#logo", { width: 106 });
                    logoTrigger(91, endVal);
                },

                // Tablet & Mobile 0 to 991
                "(max-width: 991px)": function() {
                    gsap.set(".header-main", { height: 96 });
                    headerTrigger(80, endValMob);
                    gsap.set(".language-box", { marginLeft: 32 });
                    languageTrigger(24, endValMob);
                    gsap.set(".logo-box", { marginLeft: 32 });
                    logoBoxTrigger(24, endValMob);
                    gsap.set("#logo", { width: 91 });
                    logoTrigger(80, endValMob);
                }

            });
            

            $(window).on('resize', function(){
                if($('.header-controls').length) {
                    if ($(window).width() < 769) {
                        $('.header-right .header-controls').insertAfter('.navigation-box .menu');
                    } else {
                        $('.navigation-box .header-controls').prependTo('.header-right');
                    }
                }
            }).resize();
        }
    }
</script>