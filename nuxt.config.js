
module.exports = {
  // serverMiddleware: ['~/api/index.js'],
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'google-signin-client_id', content:'468040312422-scubvil1bm9n2n72trikhnadc99a1kue.apps.googleusercontent.com'} //ZSzf2Icc5kV7SXxHAzJ-5ZId
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js', type: 'text/javascript' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js', type: 'text/javascript' },
      { src: 'https://kit.fontawesome.com/48d20e9c42.js', crossorigin: 'anonymous', type:'text/javascript'},
      { src:"https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v6.0&appId=1555723304582235&autoLogAppEvents=1", crossorigin:"anonymous"},
      { src: "https://apis.google.com/js/platform.js"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/safetogo.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/api-factory.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-leaflet',
    // '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL:'http://localhost:3000/api'
  },
  // 1555723304582235
  // auth :{
  //   strategies: {
  //     facebook: {
  //       client_id: '37ffff79cac912f54a09a2cccf6d0461',
  //       userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
  //       scope: ['public_profile', 'email']
  //     },
  //     google: { //WqaH-4rPN-FRaEhR6FJF9uSB
  //       client_id: '468040312422-9jeej0dqrcjis4vt0k6rt7g2lg3tsaja.apps.googleusercontent.com'
  //     }
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
