// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: "34566",
    public: {
      apiBase: "localhost:3000/api"
    }
  },
  typescript: {
    strict: true
  },
  css: ["~/assets/css/global.css"]
})
