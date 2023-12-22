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

  site: {
    url: 'https://snellespelletjes.nl',
  },

  sitemap: {
    cacheMaxAgeSeconds: 3600
  },

  // ssr: false,
  experimental: {
    inlineSSRStyles: false
  },

  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    ['@nuxtjs/google-fonts', {
      families: {
        'Montserrat': [300,600],
      }
    }]
  ],

  googleFonts: {
    download: true
  },

  robots: {
    rules: [
      {
        UserAgent: 'Googlebot',
        Disallow: '/login',
      },
    ]
  },
  
  i18n: {
    vueI18n: 'locale/i18n.config.ts'
  },

  imports: {
    dirs: ["stores"],
  }
})