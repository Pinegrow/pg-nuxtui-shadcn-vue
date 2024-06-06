import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  // modules: ['@nuxtjs/tailwindcss'], // Already added by nuxt-ui
  // tailwindcss: {
  //   cssPath: join(currentDir, './assets/css/tailwind.css'),
  // },

  components: [
    {
      path: join(currentDir, './components/ui'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: SvCalendar
      // prefix: 'Sv',
      // prevent adding another prefix component by it's path.
      pathPrefix: false,
    },
    {
      path: join(currentDir, './components/demos'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: SvCalendar
      // prefix: 'Sv',
      // prevent adding another prefix component by it's path.
      pathPrefix: false,
    },
  ],
})
