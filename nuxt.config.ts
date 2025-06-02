// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  modules: ['@nuxt/eslint', 'nuxt-svgo',],
  svgo: {
    defaultImport: 'component',
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: 'assets',
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/',
    }
  },
  nitro: {
    preset: 'static',
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    serveStatic: true,
  },
  router: {
    base: process.env.NUXT_APP_BASE_URL || '/',
  },
  vite: {
    base: process.env.NUXT_APP_BASE_URL || '/',
  },
})