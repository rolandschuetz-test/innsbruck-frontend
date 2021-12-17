class mainSlider {
  constructor() {
    this.controls = document.querySelectorAll('.slider-controls div')
    this.slides = document.querySelectorAll('.slider .slide')
    this.mask = document.querySelectorAll('.mask-slide')
    this.index = 0
    this.isPlaying = false
    this.timer = false
    this.interval
    this.init()
    this.initEvents()
  }

  init() {
    this.interval = setInterval(() => {
      this.play()
    }, 6000)
    this.timer = true
  }

  initEvents() {
    this.controls.forEach(control => control.addEventListener('click', (e) => this.switchSlide(e)))
  }

  switchSlide(e) {
    if (this.isPlaying) {
      return
    }

    const current = document.querySelector('.slider-controls .active')
    const slideCurrent = current.getAttribute('data-slide')
    const target = e.target
    const slideTarget = target.getAttribute('data-slide')
    const slideTargetElement = this.slides[slideTarget - 1]

    if (slideCurrent === slideTarget) {
      return
    }

    clearInterval(this.interval)
    this.timer = false
    this.play(target, slideTarget)
  }

  play(target, slideTarget) {
    const currentIndex = this.index
    let nextIndex = Number(slideTarget) || this.index + 1

    if (nextIndex > this.slides.length - 1) {
      nextIndex = 0
    }

    const activeNav = target || this.controls[nextIndex]

    this.isPlaying = true
    this.controls.forEach(control => control.classList.remove('active'))
    activeNav.classList.add('active')

    const tl = new TimelineMax({
      onComplete: () => {
        TweenMax.set(this.slides[currentIndex], {
          left: 0,
          right: 'initial'
        })
        TweenMax.set(this.mask, {
          x: '-100%'
        })
        this.isPlaying = false
        this.index = nextIndex
        if (!this.timer) {
          this.interval = setInterval(() => {
            this.play()
          }, 4000)
          this.timer = true
        }
      }
    })

    tl.to(this.mask, 1, {
      x: '0%',
      ease: Power4.easeInOut,
    })

    tl.set(this.slides[currentIndex], {
      width: '0%',
    })

    tl.to(this.mask, 1, {
      x: '100%',
      ease: Power4.easeInOut
    })

    tl.to(this.slides[nextIndex], 1, {
      width: '100%',
      ease: Power4.easeInOut
    }, '-=1')
  }
}

const horizonSlider = new mainSlider()

//export default horizonSlider;
