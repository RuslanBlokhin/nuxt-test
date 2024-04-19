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
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt', '@nuxt/eslint'],
});
