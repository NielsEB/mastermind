// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, interactive-widget=resizes-content' },
      ]
    },
  },

  ssr: false,

  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    ['@nuxtjs/google-fonts', {
      families: {
        'Montserrat': [300,600],
      }
    }]
  ],
  
  i18n: {
    vueI18n: 'locale/i18n.config.ts'
  },

  imports: {
    dirs: ["stores"],
  }
})