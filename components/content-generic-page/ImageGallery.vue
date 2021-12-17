<template>
    <div class="image-gallery-block">
        <div class="image-gallery-box">

                <splide ref="gallerySlider" :options="options" @splide:mounted="splideMount" @splide:move="movedStart" @splide:moved="movedEnd">
                    <splide-slide>
                        <div class="gallery-box">
                            <div class="gallery-img">
                                <a href="#" class="poptrigger" data-rel="gallery_popup">
                                    <div class="sr-only">Gallery Image</div>
                                    <b-image
                                        src="image-gallery-01"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="Image gallery"
                                        ratio="740by416"
                                    ></b-image>
                                </a>
                            </div>
                            <div class="caption-text">
                                <p><span>Image caption 1 lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                                <div class="slide-count">Bild 1 / 3</div>
                            </div>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="gallery-box">
                            <div class="gallery-img">
                                <a href="#" class="poptrigger" data-rel="gallery_popup">
                                    <div class="sr-only">Gallery Image</div>
                                    <b-image
                                        src="image-gallery-02"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="Image gallery"
                                        ratio="740by416"
                                    ></b-image>
                                </a>
                            </div>
                            <div class="caption-text">
                                <p><span>Image caption 1 lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                                <div class="slide-count">Bild 2 / 3</div>
                            </div>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="gallery-box">
                            <div class="gallery-img">
                                <a href="#" class="poptrigger" data-rel="gallery_popup">
                                    <div class="sr-only">Gallery Image</div>
                                    <b-image
                                        src="image-gallery-03"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="Image gallery"
                                        ratio="740by416"
                                    ></b-image>
                                </a>
                            </div>
                            <div class="caption-text">
                                <p><span>Image caption 1 lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                                <div class="slide-count">Bild 3 / 3</div>
                            </div>
                        </div>
                    </splide-slide>
                </splide>

        </div>
        <Lightbox lightboxID="gallery_popup">
            <div class="image-gallery-box">

                    <splide :options="options" ref="popSlider" @splide:mounted="splideMountPop" @splide:move="movedStartPop" @splide:moved="movedEndPop" >
                        <splide-slide>
                            <div class="gallery-box">
                                <div class="gallery-img">
                                    <b-image
                                        src="lightbox/image-gallery-01"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="Image gallery"
                                        ratio="740by416"
                                    ></b-image>
                                </div>
                                <div class="caption-text">
                                    <p><span>Image caption 1 lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                                    <div class="slide-count">Bild 1 / 3</div>
                                </div>
                            </div>
                        </splide-slide>
                        <splide-slide>
                            <div class="gallery-box">
                                <div class="gallery-img">
                                    <b-image
                                        src="lightbox/image-gallery-02"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="Image gallery"
                                        ratio="740by416"
                                    ></b-image>
                                </div>
                                <div class="caption-text">
                                    <p><span>Image caption 1 lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                                    <div class="slide-count">Bild 2 / 3</div>
                                </div>
                            </div>
                        </splide-slide>
                        <splide-slide>
                            <div class="gallery-box">
                                <div class="gallery-img">
                                    <b-image
                                        src="lightbox/image-gallery-03"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="Image gallery"
                                        ratio="740by416"
                                    ></b-image>
                                </div>
                                <div class="caption-text">
                                    <p><span>Image caption 1 lorem ipsum dolor si amet.</span><span class="caption-copyright">© Jonathan Doe</span></p>
                                    <div class="slide-count">Bild 3 / 3</div>
                                </div>
                            </div>
                        </splide-slide>
                    </splide>

            </div>
        </Lightbox>
    </div>
</template>
<script>

    let directionsld = "right";
    var slideMountCheck = false;
    import Lightbox from '~/components/general/Lightbox';
    export default {
        name: 'image-gallery',
        components: {
            Lightbox
        },
        data() {
            return {
                options: {
                    type   : 'fade',
                    arrows: true,
                    rewind : true,
                    drag: false,
                    pauseOnHover: false,
                    pagination: false,
                    keyboard: "true",
                    perPage: 1,
                    gap    : '0',
                },
            }
        },
        methods: {
            imgName(src, size){
                return require(`@/assets/images/${src}-${size}.webp`)
            },
            formatSrcset(src, size) {
                return this.imgName(src, size)
            },

            splideMount (splide, newIndex,oldIndex,destIndex) {

                let totalSlide = splide.length;
                // splide.on("inactive", function (e) {
                //     const splidTitle = e.slide.querySelectorAll('.caption-text');
                //     gsap.set(splidTitle, { autoAlpha: 0 });
                //     const timer = (totalSlide-1 == e.index ) ? 0 : 1000; 

                // });

                // let allSlide = document.querySelectorAll('.gallery-box .caption-text');
                let allSlide = this.$refs.gallerySlider.splide.root.querySelectorAll('.gallery-box .caption-text');
                let firstSlide = this.$refs.gallerySlider.splide.Components.Elements.list.children[0].querySelector('.gallery-box .caption-text');
                // let firstPopSlide = this.$refs.popSlider.splide.Components.Elements.list.children[0].querySelector('.gallery-box .caption-text');

                // console.log(allSlide)


                gsap.set(allSlide, {opacity: 0});
                gsap.set(firstSlide, {opacity: 1});
                // gsap.set(firstPopSlide, {opacity: 1});

                // console.log(firstPopSlide)
                

                // console.log(firstSlide)

                // if ( splide.State.is( splide.STATES.MOVING ) ) {

                // }

                let durationAnim = 1;
                let totalSlides = splide.Components.Elements.slides.length;
                let firstNextSlide = splide.Components.Elements.slides[1];
                let lastSlide = totalSlides - 1;
                // firstNextSlide.classList.add("next-slide");
                // lastSlide.classList.add("prev-slide");

                // Mount first next slide add class
                splide.Components.Elements.slides[1].classList.add('next-slide');
                // Mount last slide add class

                splide.Components.Elements.slides[totalSlides - 1].classList.add('prev-slide');
                // console.log(splide.Components.Elements.slides.length)

                splide.on("inactive", function (e) {
                    const splidTitle = e.slide.querySelectorAll('.caption-text');
                    gsap.to(splidTitle, { x: directionsld == "left" ? "25" : "-25", opacity: 0, duration: durationAnim / 2, ease: "power4.out" });

                });
                setTimeout(function(){
                    splide.on("active", function (e) {
                        const nextSlide = e.slide.nextElementSibling;
                        const prevSlide = e.slide.previousElementSibling;
                        const mainslide = e.slide.querySelectorAll('.gallery-img');
                        // nextSlide.addClass('nextSlide');
                        // prevSlide.addClass('prevSlide');
                        // console.log(e.slide)
                        // console.log(prevSlide)

                        // nextSlide.classList.add('nextSlide');
                        // prevSlide.classList.add('prevSlide');

                        // prevSlide.clasList.add('prevSlide');
                        //console.log(splide)
                        // const slidTitle = e.slide.querySelectorAll('h2');
                        const slidTitle = e.slide.querySelectorAll('.caption-text');
                        const slideimg = e.slide.querySelectorAll('img');
                        // if(directionsld == "left"){
                        //     gsap.fromTo(
                        //         mainslide,
                        //         { /* xPercent: 100, autoAlpha: 1 */ clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
                        //         { duration: durationAnim, ease: "power4.out", /* xPercent: 0, autoAlpha: 1 */ clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", clearProps: 'clipPath'  },
                        //     );
                        // }else{
                        //     gsap.fromTo(
                        //         mainslide,
                        //         { /* xPercent: 100, autoAlpha: 1 */ clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
                        //         { duration: durationAnim, ease: "power4.out", /* xPercent: 0, autoAlpha: 1 */ clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", clearProps: 'clipPath'  },
                        //     );
                        // }
                        
                        gsap.fromTo(mainslide,
                            { 
                                 clipPath: directionsld == "left" ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
                            },
                            { 
                                duration: durationAnim, 
                                ease: "power4.out", 
                                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
                                clearProps: 'clipPath'  
                            },
                        );

                        gsap.fromTo(
                            slideimg,
                            { scale: 1.35}, { duration: durationAnim, ease: "power4.out",  scale: 1  },
                        );
                        gsap.fromTo(
                            slidTitle,
                            { x: directionsld == "left" ? "-25" : "25", opacity: 0 }, { opacity: 1, duration: durationAnim/ 2, ease: "power4.out",  x: 0, delay: durationAnim / 5, clearProps: true  },
                        );
                    });

                    // console.log(destIndex)

                    splide.on("move", function (newIndex, oldIndex) {
                        let allSlides = splide.root.querySelectorAll(".image-gallery-box .splide__slide");
                            
                            // console.log(allSlides)
                        // allSlides.forEach( slide => {
                        //     slide.classList.remove('prev-slide');
                        //     slide.classList.remove('next-slide');
                        // });

                        // console.log('newIndex: --- '+newIndex)
                        // console.log('totalSlides: --- '+(totalSlides - 1))
                        // console.log('oldIndex: --- '+oldIndex)
                        // console.log('destIndex: --- '+destIndex)
                        
                        if(newIndex == (totalSlides - 1)) {
                            // console.log('last slide')
                            allSlides.forEach( slide => {
                                slide.classList.remove('prev-slide');
                                slide.classList.remove('next-slide');
                            });
                            splide.Components.Elements.slides[oldIndex].classList.add("prev-slide");
                            splide.Components.Elements.slides[0].classList.add("next-slide");
                        } else {
                            allSlides.forEach( slide => {
                                slide.classList.remove('prev-slide');
                                slide.classList.remove('next-slide');
                            });
                            splide.Components.Elements.slides[oldIndex].classList.add("prev-slide");
                            splide.Components.Elements.slides[newIndex + 1].classList.add("next-slide");
                        }
                        // console.log(splide.Components.Elements.slides[oldIndex])
                        
                        // splide.Components.Elements.slides[oldIndex].classList.add("prev-slide");
                        // splide.Components.Elements.slides[newIndex + 1].classList.add("next-slide");
                        // console.log(splide.Components.Elements.list.slides)
                        
                    })
                    

                    // splide.on("move", function (newIndex, oldIndex, destIndex) {
                    //     console.log(oldIndex, newIndex)
                    // })
                    
                },100)

            },

            movedStart (splide, newIndex,oldIndex,destIndex) {
                
                
            },

            movedEnd (splide, newIndex,oldIndex,destIndex) {
                splide.on("active", function (e) {
                    const mainslide = e.slide;
                    const prevSlide = mainslide.previousElementSibling;

                    // const nextSlide = e.slide.nextElementSibling;
                    // const prevSlide = e.slide.previousElementSibling;
                    
                    // nextSlide.classList.add('nextSlide');
                    // prevSlide.classList.add('prevSlide');

                    if(!splide.index == 0 ) {
                        prevSlide.style.opacity = 1;
                    }
                })

            },


            // Pop Slider
            splideMountPop (splide, newIndex,oldIndex,destIndex) {

                if(slideMountCheck) {
                    // alert('mount true')
                }

                let totalSlide = splide.length;

                let allSlide = this.$refs.popSlider.splide.root.querySelectorAll('.gallery-box .caption-text');
                
                gsap.set(allSlide, {opacity: 0});
                
                // if ( splide.State.is( splide.STATES.MOVING ) ) {

                // }

                let durationAnim = 1;
                let totalSlides = splide.Components.Elements.slides.length;
                let firstNextSlide = splide.Components.Elements.slides[1];
                let lastSlide = totalSlides - 1;

                // Mount first next slide add class
                splide.Components.Elements.slides[1].classList.add('next-slide');
                // Mount last slide add class

                splide.Components.Elements.slides[totalSlides - 1].classList.add('prev-slide');
                
                splide.on("inactive", function (e) {
                    const splidTitle = e.slide.querySelectorAll('.caption-text');
                    gsap.to(splidTitle, { x: directionsld == "left" ? "25" : "-25", opacity: 0, duration: durationAnim / 2, ease: "power4.out" });

                });

                setTimeout(function(){
                    splide.on("active", function (e) {
                        //gsap.set(allSlide, {opacity: 0});
                        const nextSlide = e.slide.nextElementSibling;
                        const prevSlide = e.slide.previousElementSibling;
                        const mainslide = e.slide.querySelectorAll('.gallery-img');

                        const slidTitle = e.slide.querySelectorAll('.caption-text');
                        const slideimg = e.slide.querySelectorAll('img');
                        
                        gsap.fromTo(mainslide,
                            { 
                                 clipPath: directionsld == "left" ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
                            },
                            { 
                                duration: durationAnim, 
                                ease: "power4.out", 
                                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
                                clearProps: 'clipPath'  
                            },
                        );

                        gsap.fromTo(
                            slideimg,
                            { scale: 1.35}, { duration: durationAnim, ease: "power4.out",  scale: 1  },
                        );
                        gsap.fromTo(
                            slidTitle,
                            { x: directionsld == "left" ? "-25" : "25", opacity: 0 }, { opacity: 1, duration: durationAnim/ 2, ease: "power4.out",  x: 0, delay: durationAnim / 5, clearProps: true  },
                        );
                    });

                    // console.log(destIndex)

                    splide.on("move", function (newIndex, oldIndex) {
                        let allSlides = splide.root.querySelectorAll(".image-gallery-box .splide__slide");
                        if(newIndex == (totalSlides - 1)) {
                            // console.log('last slide')
                            allSlides.forEach( slide => {
                                slide.classList.remove('prev-slide');
                                slide.classList.remove('next-slide');
                            });
                            splide.Components.Elements.slides[oldIndex].classList.add("prev-slide");
                            splide.Components.Elements.slides[0].classList.add("next-slide");
                        } else {
                            allSlides.forEach( slide => {
                                slide.classList.remove('prev-slide');
                                slide.classList.remove('next-slide');
                            });
                            splide.Components.Elements.slides[oldIndex].classList.add("prev-slide");
                            splide.Components.Elements.slides[newIndex + 1].classList.add("next-slide");
                        }
                        
                    })
                    
                },100)

            },

            movedStartPop (splide, newIndex,oldIndex,destIndex) {
                
                
            },

            movedEndPop (splide, newIndex,oldIndex,destIndex) {
                splide.on("active", function (e) {
                    const mainslide = e.slide;
                    const prevSlide = mainslide.previousElementSibling;

                    if(!splide.index == 0 ) {
                        prevSlide.style.opacity = 1;
                    }
                })

            },

        },
        mounted() {

            let posliderElm = this.$refs.popSlider.splide;
            let galleryElm = this.$refs.gallerySlider.splide;
            // console.log(galleryElm);
            $('.splide__arrow--prev').click(function(){
               directionsld = "left";
            //    console.log("click");
            //    console.log(directionsld);
            })
             $('.splide__arrow--next').click(function(){
               directionsld = "right";
            //    console.log("click");
            //    console.log(directionsld);
            })
            $('.poptrigger').on('click', function(){
                var activeIndex = $(this).parents('.splide__list').find('.is-active').index();
                // // var popCaptionActive = posliderElm.Components.Elements.slides;
                // var popCaptionActive = posliderElm.root.querySelectorAll('.splide__slide.is-active .caption-text');
                // console.log(popCaptionActive)
                slideMountCheck = true;
                setTimeout(function(){
                    posliderElm.refresh();
                    // posliderElm.mount();
                    // gsap.set(popCaption, {opacity: 0});
                    posliderElm.go(activeIndex, false);
                    setTimeout(function(){
                        var popCaption = posliderElm.root.querySelectorAll('.gallery-box .caption-text');
                        var popCaptionActive = posliderElm.root.querySelectorAll('.splide__slide.is-active .caption-text');
                        gsap.set(popCaption, {opacity: 0});
                        gsap.set(popCaptionActive, {opacity: 1});
                    }, 800)
                }, 100)
            })

            $(document).on('click', '.close-dialogbox, .modal-backdrop', function(){
                if($(this).parents('.popup-main').find('.splide__list').length) {
                    var activeInx = $(this).parents('.popup-main').find('.splide__list .is-active').index();
                    galleryElm.go(activeInx, false);
                }
            })
            
            
        }
    }

</script>
