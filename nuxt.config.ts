// https://nuxt.com/docs/api/configuration/nuxt-config
import browserslist from 'browserslist';
import { resolveToEsbuildTarget } from 'esbuild-plugin-browserslist';
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Срочные займы на карту онлайн от ведущих МФО',

      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5',
        },
        {
          name: 'description',
          content:
            'Возьми срочный онлайн заём сейчас. Нужен только паспорт! Без лишних проверок. Быстро. Удобно. Онлайн. Круглосуточно, без праздников и выходных.',
        },
        { name: 'keywords', content: 'займ на карту онлайн, только паспорт, мфо' },
        { name: 'theme-color', content: '#fff' },
        { name: 'application-name', content: 'zaim nakarty' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'zaim nakarty' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'msapplication-starturl', content: 'https://offers-nuxt-test.vercel.app/' },
        { property: 'og:site_name', content: 'https://offers-nuxt-test.vercel.app/' },
        { property: 'og:url', content: 'https://offers-nuxt-test.vercel.app/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://offers-nuxt-test.vercel.app/coins.png' },
        { property: 'og:image:width', content: '384' },
        { property: 'og:image:height', content: '378' },
        { property: 'og:title', content: 'Срочные займы на карту онлайн от ведущих МФО' },
        {
          property: 'og:description',
          content:
            'Возьми срочный онлайн заём сейчас. Нужен только паспорт! Без лишних проверок. Быстро. Удобно. Онлайн. Круглосуточно, без праздников и выходных.',
        },
        { property: 'vk:image', content: 'https://offers-nuxt-test.vercel.app/coins.png' },
        { property: 'twitter:site', content: 'https://offers-test.netlify.app' },
        { property: 'twitter:title', content: 'Срочные займы на карту онлайн от ведущих МФО' },
        {
          property: 'twitter:description',
          content:
            'Возьми срочный онлайн заём сейчас. Нужен только паспорт! Без лишних проверок. Быстро. Удобно. Онлайн. Круглосуточно, без праздников и выходных.',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:image', content: 'https://offers-nuxt-test.vercel.app/coins.png' },
        { property: 'twitter:url', content: 'https://offers-test.netlify.app' },
        { 'http-equiv': 'Content-type', content: 'text/html;charset=windows-1251' },
        { 'http-equiv': 'Content-language', content: 'ru' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://offers-nuxt-test.vercel.app/' },
        { rel: 'dns-prefetch', href: 'https://offers-nuxt-test.vercel.app/' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
      ],
      script: [
        {
          children: `
          var isYmInit = false;
          window.addEventListener('scroll', () => {
            if (isYmInit === false) {
              isYmInit = true;
          
              setTimeout(() => {
                (function (m, e, t, r, i, k, a) {
                  m[i] =
                    m[i] ||
                    function () {
                      (m[i].a = m[i].a || []).push(arguments);
                    };
                  m[i].l = 1 * new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                      return;
                    }
                  }
                  (k = e.createElement(t)),
                    (a = e.getElementsByTagName(t)[0]),
                    (k.async = 1),
                    (k.src = r),
                    a.parentNode.insertBefore(k, a);
                })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
                window.ym(${Number(process.env.YM_ID)}, 'init', {
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                });
              }, 1000);
            }
          });
          `,
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
  css: ['~/assets/css/global.scss'],
  devtools: { enabled: false },
  modules: [
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
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
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'inline',
    strategies: 'generateSW',
    workbox: {
      globPatterns: ['**/*.{js,css}'],
      navigateFallback: null,
    },
    manifest: {
      name: 'Срочные займы на карту онлайн от ведущих МФО',
      lang: 'ru',
      short_name: 'zaim nakarty',
      description:
        'Возьми срочный онлайн заём сейчас. Нужен только паспорт! Без лишних проверок. Быстро. Удобно. Онлайн. Круглосуточно, без праздников и выходных.',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      theme_color: '#14151c',
      background_color: '#14151c',
      orientation: 'any',
      icons: [
        {
          src: '/coins.png',
          sizes: '384x378',
          purpose: 'maskable',
        },
        {
          src: '/coins.png',
          sizes: '512x512',
        },
      ],
    },
  },
  image: {
    format: ['avif', 'webp', 'jpeg', 'jpg', 'png', 'gif'],
    screens: {
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
  vite: {
    build: {
      target: getBuildTarget([
        '>0.1% and supports es6-module and not ios < 12 and not opera > 0',
        'node >= 18.13.0',
      ]),
    },
  },
});

function getBuildTarget(browsers: Array<string>) {
  return resolveToEsbuildTarget(browserslist(browsers), {
    printUnknownTargets: false,
  });
}
