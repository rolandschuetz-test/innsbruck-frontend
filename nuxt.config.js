export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: false,
  head: {
    title: 'innsbruckgvat',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'description',
        content: 'Die digitale Servicestelle der Stadt Innsbruck'
      },
      {
        name: 'robots',
        content: 'noindex, nofollow'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },

      // Windows 8.0
      {
        name: 'msapplication-TileColor',
        content: '#ffffff'
      },
      {
        name: 'msapplication-TileImage',
        content: '/favicon/mstile-144x144.png'
      }
    ],
    // link: [{
    //   rel: 'icon',
    //   type: 'image/x-icon',
    //   href: '/favicon.png'
    // }],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.png', sizes: '32x32', class: 'light-scheme-icon' },
      
      // preload fonts
      // { rel: 'preload', href: '/assets/fonts/AltoProCon-Normal.woff', as: 'font', type: 'font/woff' },
      // { rel: 'preload', href: '/assets/fonts/AltoProCon-Medium.woff', as: 'font', type: 'font/woff' },
      // { rel: 'preload', href: '/assets/fonts/AltoProCon-SemiBold.woff', as: 'font', type: 'font/woff' },
      // { rel: 'preload', href: '/assets/fonts/AltoProCon-Bold.woff', as: 'font', type: 'font/woff' },

      // Desktop browser favicon
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', sizes: '32x32', class: 'light-scheme-icon' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-48x48.png', sizes: '48x48', class: 'light-scheme-icon' },
      { rel: 'shortcut icon', type: 'image/ico', href: '/favicon/favicon.ico', class: 'light-scheme-icon'},
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32-darkscheme.png', sizes: '32x32', class: 'dark-scheme-icon' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-48x48-darkscheme.png', sizes: '48x48', class: 'dark-scheme-icon' },
      { rel: 'shortcut icon', type: 'image/ico', href: '/favicon/favicon-darkscheme.ico', class: 'dark-scheme-icon' },

      // Apple Touch Icon
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },

      // Android, Chrome - Edit site.webmanifest file to change image srcs
      { rel: 'manifest', href: '/favicon/site.webmanifest' },

      // Safari pinned tab
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg' }
    ],

    script: [/* {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js",
        type: "text/javascript",
        body: true
      },
      {
        src: "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js",
        type: "text/javascript",
        body: true
      }, */
      {
        src: "/assets/js/jquery.min.js",
        type: "text/javascript",
        rel: "preconnect",
        rel: "dns-prefetch",
        // body: true,
        // defer: true,
        // async: true
      },
      {
        src: "/assets/js/jquery.cookie.js",
        type: "text/javascript",
        rel: "preconnect",
        rel: "dns-prefetch",
        // body: true,
        // defer: true,
        // async: true
      },
      {
        src: "/assets/js/gsap.min.js",
        type: "text/javascript",
        rel: "preconnect",
        rel: "dns-prefetch",
        // body: true,
        // defer: true,
        // async: true
      },
      {
        src: "/assets/js/ScrollTrigger.min.js",
        type: "text/javascript",
        rel: "preconnect",
        rel: "dns-prefetch",
        // body: true,
        // defer: true,
        // async: true
      },
      {
        src: "/assets/js/general.js",
        type: "text/javascript",
        rel: "preconnect",
        rel: "dns-prefetch",
        body: true,
        defer: true,
        async: true
      },
    ]

  },
  styleResources: {
    scss: [
      '@/assets/scss/globle/variables.scss',
      '@/assets/scss/globle/functions.scss',
      '@/assets/scss/globle/mixins.scss',
      '@/assets/scss/globle/placeholder.scss',
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  //dev: process.env.NODE_ENV !== 'production',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: '~/plugins/vue-plyr.js',
      // mode: 'client',
      // ssr: false
    },
    {
      src: '~/plugins/splide.client.js',
      //target: 'static',
      //mode: 'client',
      //ssr: false
    },
    {
      src: '~/plugins/vuelidate.js',
    },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-font-loader"],

  fontLoader: {
    /*
     ** Automatically sets the best settings based on your url option
     */
    url: {
      local: "~/assets/scss/helpers/typography.scss",
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    //'nuxt-buefy',
    ['nuxt-buefy', { materialDesignIcons: false }],
    '@nuxtjs/style-resources'
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      const isProd = process.env.NODE_ENV === 'production';
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 249856; // 244 Kib
      }
    },
  }
}
