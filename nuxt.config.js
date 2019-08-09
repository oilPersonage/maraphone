module.exports = {
  head: {
    title: 'Maraphone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Maraphones' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Comfortaa|Roboto&display=swap' }
    ]
  },
  layoutTransition: 'layout',
  css: [
    { src: '~assets/main.sass', lang: 'sass' }
  ],
  modules: [
    ['@nuxtjs/moment', ['ru']],
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          }
        ]
      }
    ]
  ],
  toast: {
    position: 'top-center',
    duration: 3000,
    className: 'custom-toast'
  },
  plugins: [
    '~/plugins/axios'
  ],
  router: {
    middleware: ['auth']
  },
  axios: {
    proxy: true
  },
  proxy: {
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'eval-source-map'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        })
      }
    }
  }
}
