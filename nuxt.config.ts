// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-lodash'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or 'modern'
        }
      }
    }
  },
  lodash: {
    prefix: '_',
    prefixSkip: false,
    upperAfterPrefix: false,
    exclude: [],
    alias: []
  },
  stylelint: {
    lintOnStart: false
  },
  eslint: {
    lintOnStart: false
  },
  tailwindcss: {
    quiet: true
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
