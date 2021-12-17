<template>
    <div class="news-section">
        <div class="container">
            <div class="title-link">
                <p>Neuigkeiten <span>von <a href="https://www.ibkinfo.at/" class="underline" target="_blank"><span class="line">Innsbruck informiert</span></a></span></p>
            </div>
            <div>
                <splide :options="options" ref="newsSlider">
                    <splide-slide>
                        <div class="news-box">
                            <a href="https://www.ibkinfo.at/" target="_blank">
                                <div class="news-img">
                                    <b-image
                                        src="news-01"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="The News"
                                        ratio="410by409"
                                        :rounded="rounded"
                                    ></b-image>
                                </div>
                                <div class="news-info">
                                    <ul class="category">
                                        <li>Kinder &amp; Jugend</li>
                                    </ul>
                                    <h2><span class="line">Städtische Schulen sind gut vorbereitet</span></h2>
                                    <p>Stufenweise Öffnung ab Montag, 18. Mai</p>
                                </div>
                                
                            </a>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="news-box">
                            <a href="https://www.ibkinfo.at/" target="_blank">
                                <div class="news-img">
                                    <b-image
                                        src="news-02"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="The News"
                                        ratio="410by409"
                                        :rounded="rounded"
                                    ></b-image>
                                </div>
                                <div class="news-info">
                                    <ul class="category">
                                        <li>Gesellschaft &amp; Soziales</li>
                                    </ul>
                                    <h2><span class="line">15. Mai: Öffnung der Gastronomie und städtischen Almen</span></h2>
                                    <p>Unterstützung für Gastgarten-BetreiberInnen – Neustart mit Regeln</p>
                                </div>
                            </a>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="news-box">
                            <a href="https://www.ibkinfo.at/" target="_blank">
                                <div class="news-img">
                                    <b-image
                                        src="news-03"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="The News"
                                        ratio="410by409"
                                        :rounded="rounded"
                                    ></b-image>
                                </div>
                                <div class="news-info">
                                    <ul class="category">
                                        <li>Kultur &amp; Wissenschaft</li>
                                    </ul>
                                    <h2><span class="line">Kultur und Musik wieder vor Ort erlebbar</span></h2>
                                    <p>Städtische Museen und Musikschule öffnen am Montag, 18. Mai</p>
                                </div>
                            </a>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="news-box">
                            <a href="https://www.ibkinfo.at/" target="_blank">
                                <div class="news-img">
                                    <b-image
                                        src="news-01"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="The News"
                                        ratio="410by409"
                                        :rounded="rounded"
                                    ></b-image>
                                </div>
                                <div class="news-info">
                                    <ul class="category">
                                        <li>Kinder &amp; Jugend</li>
                                    </ul>
                                    <h2><span class="line">Städtische Schulen sind gut vorbereitet</span></h2>
                                    <p>Stufenweise Öffnung ab Montag, 18. Mai</p>
                                </div>
                                
                            </a>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="news-box">
                            <a href="https://www.ibkinfo.at/" target="_blank">
                                <div class="news-img">
                                    <b-image
                                        src="news-02"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="The The News"
                                        ratio="410by409"
                                        :rounded="rounded"
                                    ></b-image>
                                </div>
                                <div class="news-info">
                                    <ul class="category">
                                        <li>Gesellschaft &amp; Soziales</li>
                                    </ul>
                                    <h2><span class="line">15. Mai: Öffnung der Gastronomie und städtischen Almen</span></h2>
                                    <p>Unterstützung für Gastgarten-BetreiberInnen – Neustart mit Regeln</p>
                                </div>
                            </a>
                        </div>
                    </splide-slide>
                    <splide-slide>
                        <div class="news-box">
                            <a href="https://www.ibkinfo.at/" target="_blank">
                                <div class="news-img">
                                    <b-image
                                        src="news-03"
                                        :srcset-sizes="[400, 800, 1600]"
                                        :srcset-formatter="this.formatSrcset"
                                        webp-fallback=".png"
                                        alt="The The News"
                                        ratio="410by409"
                                        :rounded="rounded"
                                    ></b-image>
                                </div>
                                <div class="news-info">
                                    <ul class="category">
                                        <li>Kultur &amp; Wissenschaft</li>
                                    </ul>
                                    <h2><span class="line">Kultur und Musik wieder vor Ort erlebbar</span></h2>
                                    <p>Städtische Museen und Musikschule öffnen am Montag, 18. Mai</p>
                                </div>
                            </a>
                        </div>
                    </splide-slide>
                </splide>
            </div>
            
            <div class="news-btn">
                <b-button type="is-secondary" icon-right="link-right">Mehr auf Innsbruck informiert</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
          return {
              rounded: false,
              options: {
                  
                  type: "slide",
                  rewind : true,
                  lazyLoad: 'nearby',
                  speed: 600,
                  pagination:false,
                  interval: 5000,
                  keyboard: "true",
                  perPage: 3,
                  gap    : 56,
                  breakpoints: {
                    1199: {
                        gap    : 40,
                    },
                    991: {
                        perPage: 2,
                        gap    : 32,
                    },
                    767: {
                        perPage: 2,
                        gap    : 24,
                    },
                    575: {
                        perPage: 1,
                        gap    : 12,
                    },
                  }
              },              
            };
        },
        methods: {
            imgName(src, size){
                return require(`@/assets/images/${src}-${size}.webp`)
            },
            formatSrcset(src, size) {
                return this.imgName(src, size)
            }
        }
    }
</script>