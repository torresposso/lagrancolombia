import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({

  devServer: {
    port: 4321    
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
  ],
  colorMode: {
    preference: 'light'
  },
})