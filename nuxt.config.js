export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  server: {
    host: '0.0.0.0'
  },

  head: {
    title: 'Luis Enrique Bustamante Pérez' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'luis_enrique',
        name: 'Luis_enrique_bustamante',
        content: 'Luis Enrique Bustamante Peres, escritor'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#646464'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: 'images/icon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: 'images/icon/favicon-16x16.png' },
      { rel: 'manifest', href: 'images/icon/site.webmanifest' },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ffd400" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon.png" },
      { rel: 'icon', type: 'image/x-icon', href: 'images/icon/favicon.ico' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', rel: "stylesheet" },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      // { src: 'https://kit.fontawesome.com/3122b9c598.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' },
      { src: 'https://checkout.culqi.com/js/v3' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /**
   * router exact active
   */
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  /*
   ** Global CSS
   */
  css: [
    // 'bootstrap/dist/css/bootstrap.css',
    '~/assets/scss/app.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: 'plugins/owl.js', ssr: false },
    '~/plugins/axios',
    '~/plugins/api'
    // { src: '~/plugins/vee-validate', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    ['nuxt-validate', {
      lang: 'es',
      nuxti18n: {
        locale: {
          'zh-CN': 'zh_CN'
        }
      }
    }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ?
      'https://enriqueapi.herokuapp.com/api/' :
      'https://enriqueapi.herokuapp.com/api/'
  },

  toast: {
    position: 'top-right',
    className: 'app-toast',
    duration: 4000,
    action: {
      text: 'X',
      // eslint-disable-next-line
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
}
