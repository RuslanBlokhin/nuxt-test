// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Срочные займы на карту онлайн от ведущих МФО',
      meta: [
        {
          name: 'description',
          content:
            'Возьми срочный онлайн заём сейчас. Нужен только паспорт! Без лишних проверок. Быстро. Удобно. Онлайн. Круглосуточно, без праздников и выходных.',
        },
        { name: 'keywords', content: 'займ на карту онлайн, только паспорт, мфо' },
        { name: 'theme-color', content: '#fff' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'name="application-name', content: 'zaim nakarty' },
        { 'http-equiv': 'Content-type', content: 'text/html;charset=windows-1251' },
        { 'http-equiv': 'Content-language', content: 'ru' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
      ],
    },
  },
  css: ['~/assets/css/global.scss', '~/assets/css/container.scss'],
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    'nuxt-gtag',
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: process.env.YM_ID,
        // webvisor: true,
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Jost: [300, 400, 500],
        },
        preload: true,
      },
    ],
  ],
  image: {
    // format: ['avif', 'webp', 'jpeg', 'jpg', 'png', 'gif'],
    screens: {
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
  gtag: {
    id: 'G-JQ16R7NP2L',
  },
});
