// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@hypernym/nuxt-anime',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-time'
  ],

  anime: {
    composables: true
  },

  image: {
    provider: 'twicpics',
    format: ['webp'],
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/concept'
    }
  },

  build: {
    transpile: ['gsap']
  },

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-01-26'
})