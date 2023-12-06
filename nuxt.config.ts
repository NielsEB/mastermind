// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icon',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Mochiy+Pop+One': [400],
      }
    }]
  ],

  imports: {
    dirs: ["stores"],
  }
})