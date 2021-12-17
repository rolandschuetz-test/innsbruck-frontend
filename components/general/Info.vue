<template>
    <div :class="'info-block '+infoType">
        <div class="container">
            <div class="info-block-row">
                <div class="info-block-content">
                    <p>
                        <a href="#" class="underline white"><slot /></a>
                    </p>
                </div>
                <a href="#" class="info-close"><em class="icon-burger-close-desktop">Icons close</em></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Info',
        props: {
            infoType: {
                type: String,
                required: true
            }
        },
        mounted() {
            const closeMe = document.querySelector(".info-close");
            const infoRow = document.querySelector(".info-block");
            const headerheight = document.querySelector('.header-main').clientHeight;
            closeMe.addEventListener('click', (event) =>{
                event.stopPropagation();
                event.preventDefault();
                gsap.to(infoRow, {
                    height: 0,
                    duration: 0.6,
                    ease: 'power4.out',
                    onComplete:()=>{
                        infoRow.remove();
                    }
                })

                gsap.to('.page-banner', {
                    paddingTop: headerheight,
                    duration: 0.6,
                    ease: 'power4.out'
                })
            })

            // Info Block
            if($('#header .info-block').length) {
                $('body').addClass('info-active');
            }
            $('.info-close').on('click', function(){
                $('body').removeClass('info-active');
                return false
            })

            
        }
    }
</script>