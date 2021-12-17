<template>
    <div>

        <Cookie></Cookie>
       
        <Header :isVisible="searchState"></Header>
         
        <div class="main-content">
            
            <Nuxt />
            
        </div>
        <Footer :isHidden="footerContactState"></Footer>
    </div>
</template>

<script>
import { mapMutations, mapGatters, mapState } from 'vuex';
import Cookie from './partials/Cookie';
import Header from './partials/Header';
import Footer from './partials/Footer';
export default {
    name: 'HomePage',
    components: {
        Cookie,
        Header,
        Footer
    },
    computed: mapState([
        'searchState',
        'layout',
        'footerContactState'
    ]),
    mounted (){

        // script for favicon

        function setupIcons() {
            const lightSchemeIcon = document.querySelector('link.light-scheme-icon');
            const darkSchemeIcon = document.querySelector('link.dark-scheme-icon');
        
            function setLight() {
                document.head.append(lightSchemeIcon);
                darkSchemeIcon.remove();
            }

            function setDark() {
                lightSchemeIcon.remove();
                document.head.append(darkSchemeIcon);
            }


            const matcher = window.matchMedia('(prefers-color-scheme:dark)');
            function onUpdate() {
                if (matcher.matches) {
                    setDark();
                } else {
                    setLight();
                }
            }
            matcher.addListener(onUpdate);
            onUpdate();
        }

        setupIcons();

        // end of favicon script


        window.addEventListener('DOMContentLoaded', (event) => {
        });
        
       
        this.isVisible = this.$store.state.searchState;
        this.isHidden = this.$store.state.footerContactState;

        // Add extra classes for underline styling to a tag
        
        $('.content-page a').each(function(){
            var $this = $(this);
            // Not target all a tag which is not require for underline span tag
            if(!$this.hasClass('underline') && !$this.hasClass('poptrigger') && !$this.hasClass('close-dialogbox') && !$this.parents('ul').hasClass('download-list') && !$this.parents('ul').hasClass('link-list') && !$this.parents('div').hasClass('contact-section')) {
                $this.addClass('underline red-500').wrapInner('<span class="line"></span>')
            }
        })


        // Set target blank to all the external links
        $('a[href^="http"], a[href^="https"]').each(function(){
            var $this = $(this);
            if(!$this.attr('target')) {
                $this.attr('target','_blank');
            }
            if(!$this.attr('rel')) {
                $this.attr('rel','noopener');
            }
        })

        
        

        // Popup diff for scrollbar
        const popDiff = () => {
            const screenWidth = screen;
            const bodyWidth = document.querySelector('body');
            const scrollDiff = screenWidth.width - bodyWidth.offsetWidth;
            
            const doc = document.documentElement
            doc.style.setProperty('--pop-diff', `${scrollDiff}px`)
        }
        window.addEventListener('resize', popDiff)
        popDiff();

        // Detect Mac and Window
        if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            $("body").addClass("mac");
        } else {
            $("body").addClass("pc");
        }

        // const onTouchStart = (event) => {
        //     //console.log('passive true');
        //     //event.preventDefault();
        // }
        // document.addEventListener ('touchstart', handle, {passive: true});
        //document.addEventListener('touchstart', onTouchStart, {passive: true});

        /**
         * Use passive listeners to improve scrolling performance
         */
        jQuery.event.special.touchstart = {
            setup: function( _, ns, handle ){
                if ( ns.includes('noPreventDefault') ) {
                    this.addEventListener('touchstart', handle, { passive: false });
                } else {
                    this.addEventListener('touchstart', handle, { passive: true });
                }
            }
        }; 

        jQuery.event.special.touchend = {
            setup: function( _, ns, handle ){
                if ( ns.includes('noPreventDefault') ) {
                this.addEventListener('touchend', handle, { passive: false });
                } else {
                this.addEventListener('touchend', handle, { passive: true });
                }
            }
        };

        
        
    },
    data () {
        var varData = {
            isModalOne: false,
            isModalTwo: false,
            isVisible: false,
            isHidden: false,
            isModalThree: false,
            fromChild: '',
            rounded: false,
            items: [
                {
                    title: 'Home', 
                    icon: 'home',
                    to: { name: 'index' }
                },
                {
                    title: 'Inspire',
                    icon: 'lightbulb',
                    to: { name: 'inspire' }
                }
            ]
        }
        return varData
    },
    updated: function () {
        
        $('.content-page a').each(function(){
            var $this = $(this);
            // Not target all a tag which is not require for underline span tag
            if(!$this.hasClass('underline') && !$this.hasClass('poptrigger') && !$this.hasClass('close-dialogbox') && !$this.parents('ul').hasClass('download-list') && !$this.parents('ul').hasClass('link-list') && !$this.parents('div').hasClass('contact-section')) {
                $this.addClass('underline red-500').wrapInner('<span class="line"></span>')
            }
        })

        // Set target blank to all the external links
        $('a[href^="http"], a[href^="https"]').each(function(){
            var $this = $(this);
            if(!$this.attr('target')) {
                $this.attr('target','_blank');
            }
            if(!$this.attr('rel')) {
                $this.attr('rel','noopener');
            }
        })

        this.$nextTick(function () {
            
            // console.log('updated')
            if($('.feedback-info').is(':hidden')) {
                $('.feedback-info').removeAttr("style");
                $('.feedback-result').removeAttr("style");
            }
            else if ($('.feedback-form').is(':visible')) {
                $('.feedback_trigger').removeClass('active');
                $('.feedback-form').removeAttr("style");
            }

        })
    },

    methods: {
       
    }
}
</script>
