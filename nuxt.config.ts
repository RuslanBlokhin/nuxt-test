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
      script: [
        {
          children: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
            ym(97100842, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
          `,
        },
        {
          children: '',
        },
      ],
      noscript: [
        {
          children: `
            <div><img src="https://mc.yandex.ru/watch/97100842" style="position:absolute; left:-9999px;" alt="" /></div>
          `,
        },
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
