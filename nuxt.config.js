const webpack = require('webpack')
// const routerBase =
//   process.env.DEPLOY_ENV === 'GH_PAGES'
//     ? {
//         router: {
//           base: '/nuxtproject/'
//         }
//       }
//     : {}

export default {
  generate: {
    fallback: true
  },
  ssr: false,
  // ssr: false, //or universal,
  // router: {
  //   base: '/nuxtproject/'
  // },
  // ...routerBase,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    script: [{ src: '/js/404-redirect-ghpages.js' }], // これを追記
    title: 'nuxt-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // Nuxt.js 2.4 以降、ssr:falseではなくmode: 'client'になる
    { src: '~/plugins/vue-nl2br.js', ssr: false }
  ],
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  axios: {
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    performance: {
      maxEntrypointSize: 500000,
      maxAssetSize: 500000,
    },
    plugins: [
      new webpack.ProvidePlugin({
        // グローバルなモジュール
        _: 'lodash'
      })
    ]
  }
}

