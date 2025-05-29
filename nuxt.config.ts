// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  modules: ['@nuxt/eslint', 'nuxt-svgo',],
  svgo: {
    defaultImport: 'component',
  },
})