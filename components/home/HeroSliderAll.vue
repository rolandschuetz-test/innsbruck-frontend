<template>
    <div class="hero-slider">
        <splide :options="options" @splide:mounted="splideMount" @splide:move="movedStart" @splide:moved="movedEnd" @splide:active="dotsplay" ref="bannerSlider">
            
            <splide-slide>
                <div class="slide-box blue">
                    <div class="slide-img">
                        <div class="slide-img-box" :style="{backgroundImage: 'url('+require(`@/assets/images/hero-image-01.jpg`)+')'}"></div>
                    </div>
                    <div class="slide-data">
                        <h2><a href="#" class="underline white"><span class="line">Infos zur Kindergarten Anmeldung</span></a></h2>
                    </div>
                </div>
            </splide-slide>
            <splide-slide>
                <div class="slide-box violet">
                    <div class="slide-img">
                        <div class="slide-img-box" :style="{backgroundImage: 'url('+require(`@/assets/images/hero-image-01.jpg`)+')'}"></div>
                    </div>
                    <div class="slide-data">
                        <h2><a href="#" class="underline white"><span class="line">Infos zur Kindergarten Anmeldung</span></a></h2>
                    </div>
                </div>
            </splide-slide>
            <splide-slide>
                <div class="slide-box peach">
                    <div class="slide-img">
                        <div class="slide-img-box" :style="{backgroundImage: 'url('+require(`@/assets/images/hero-image-01.jpg`)+')'}"></div>
                    </div>
                    <div class="slide-data">
                        <h2><a href="#" class="underline white"><span class="line">Infos zur Kindergarten Anmeldung</span></a></h2>
                    </div>
                </div>
            </splide-slide>

            <splide-slide>
                <div class="slide-box pink">
                    <div class="slide-img">
                        <div class="slide-img-box" :style="{backgroundImage: 'url('+require(`@/assets/images/hero-image-01.jpg`)+')'}"></div>
                    </div>
                    <div class="slide-data">
                        <h2><a href="#" class="underline white"><span class="line">Infos zur Kindergarten Anmeldung</span></a></h2>
                    </div>
                </div>
            </splide-slide>
            <splide-slide>
                <div class="slide-box green">
                    <div class="slide-img">
                        <div class="slide-img-box" :style="{backgroundImage: 'url('+require(`@/assets/images/hero-image-01.jpg`)+')'}"></div>
                    </div>
                    <div class="slide-data">
                        <h2><a href="#" class="underline white"><span class="line">Infos zur Kindergarten Anmeldung</span></a></h2>
                    </div>
                </div>
            </splide-slide>
            <splide-slide>
                <div class="slide-box gold">
                    <div class="slide-img">
                        <div class="slide-img-box" :style="{backgroundImage: 'url('+require(`@/assets/images/hero-image-01.jpg`)+')'}"></div>
                    </div>
                    <div class="slide-data">
                        <h2><a href="#" class="underline white"><span class="line">Infos zur Kindergarten Anmeldung</span></a></h2>
                    </div>
                </div>
            </splide-slide>


            <template v-slot:controls>
                <div class="splide__custom__pagination__main">
                    <ul class="splide__custom__pagination">
                        <li v-for="(slide, index) in slides" :key="index">
                            <svg  width="100%" height="100%" viewBox="0 0 100 100" class="chart">
                                <circle r="25" cx="50" cy="50" class="pie" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </template>
        </splide>
    </div>
</template>

<script>
    export default {
        name:'HeroSlider',
        data() {
            return {
                options: {
                    type   : 'fade',
                    arrows: false,
                    rewind : true,
                    speed: 1400,
                    autoplay    : true,
                    pauseOnHover: false,
                    interval: 5000,
                    throttle: 1000,
                    keyboard: "true",
                    perPage: 1,
                    gap    : '0',
                    resetProgress: false,
                },
                slides: [
                    { class:"blue" },
                    { class:"violet" },
                    { class:"peach" },
                    { class:"pink" },
                    { class:"green" },
                    { class:"gold" },
                ]
            };
        },
        methods: {
            splideMount (splide, newIndex,oldIndex,destIndex) {
                const pourcentage = 45;
                const total = 360;
                const result = ((pourcentage * total) / 100);
                const slider_pagination = splide.root.querySelectorAll('.splide__custom__pagination li');
                slider_pagination.forEach((item, index) => { 
                    if(index == 0){
                        item.classList.add('actSlide');
                        item.querySelector('.pie').style.strokeDasharray = result;
                    } else {
                        item.classList.remove('actSlide');
                        item.querySelector('.pie').style.strokeDasharray = '';
                    }
                });
                let allSlide = document.querySelectorAll('.slide-data h2');
                let firstSlide = this.$refs.bannerSlider.splide.Components.Elements.list.children[0].querySelectorAll('.slide-data h2');
                gsap.set(allSlide, {opacity: 0});
                gsap.set(firstSlide, {opacity: 1});


                let durationAnim = 1;
                let totalSlide = this.$refs.bannerSlider.splide.length;

                this.$refs.bannerSlider.splide.on("inactive", function (e) {
                    const splidTitle = e.slide.querySelectorAll('h2');
                    gsap.to(splidTitle, { x: -25, opacity: 0, duration: durationAnim / 2, ease: "power4.out" });
                    const timer = (totalSlide-1 == e.index ) ? 0 : 1000; 

                });
                const customePagers = document.querySelectorAll('.splide__custom__pagination li');

                customePagers.forEach((item, index) => { 
                    item.addEventListener("click", (event) => {
                        this.$refs.bannerSlider.splide.go(index)
                    });
                });


                // Ensure the slider is not moving.
                // if ( this.$refs.bannerSlider.splide.State.is( this.$refs.bannerSlider.splide.STATES.MOVING ) ) {
                // }

                
            },

            movedStart () {
                let durationAnim = 1;
                this.$refs.bannerSlider.splide.on("active", function (e) {
                    const mainslide = e.slide.querySelectorAll('.slide-img-box');
                    const slidTitle = e.slide.querySelectorAll('h2');
                    const slideimg = e.slide.querySelectorAll('.slide-img-box');

                    gsap.fromTo(
                        mainslide,
                        { /* xPercent: 100, autoAlpha: 1 */ clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
                        { duration: durationAnim, ease: "power4.out", /* xPercent: 0, autoAlpha: 1 */ clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", clearProps: 'clipPath'  },
                    );
                    gsap.fromTo(
                        slideimg,
                        { scale: 1.35}, { duration: durationAnim, ease: "power4.out",  scale: 1  },
                    );
                    gsap.fromTo(
                        slidTitle,
                        { x: 25, opacity: 0 }, { duration: durationAnim / 2, ease: "power4.out",  x: 0,  opacity: 1, delay: durationAnim / 5, clearProps: true  },
                    );
                });
            },

            movedEnd (splide, newIndex,oldIndex,destIndex) {
                const pourcentage = 45;
                const total = 360;
                const result = ((pourcentage * total) / 100);
                const slider_pagination = splide.root.querySelectorAll('.splide__custom__pagination li');
                slider_pagination.forEach((item, index) => { 
                    if(index == newIndex){
                        item.classList.add('actSlide');
                        item.querySelector('.pie').style.strokeDasharray = result;
                    } else {
                        item.classList.remove('actSlide');
                        item.querySelector('.pie').style.strokeDasharray = '';
                    }
                }); 

                const bannergetColor = this.slides[newIndex].class;
                document.querySelector('.banner-section').dataset.color = bannergetColor;
                
                splide.on("active", function (e) {
                    const mainslide = e.slide;
                    const prevSlide = mainslide.previousElementSibling;
                    if(!splide.index == 0 ) {
                        prevSlide.style.opacity = 1;
                    }
                })

            },

            dotsplay (rate) {

            }


        },
        mounted (){

        }
    }
</script>