
module.exports = {
  modules: [
    ['nuxt-i18n',]
  ],
  i18n: {
    seo: false,
    baseUrl: process.env.API_URL,
    locales: [
      {
        name: 'Русский',
        code: 'ru',     //unique identifier of the locale
        file: 'ru.json',   //resolved relative to langDir_path
        iso: 'ru'      //used for SEO features and for matching browser locales when using detectBrowserLanguage functionality.
      },
      {
        name: 'English',
        code: 'en',
        file: 'en.json',
        iso: 'en'           //or 'en-US'
      },
    ],
    vueI18n: {
      // fallbackLocale: 'en',
      fallbackLocale: ['en', 'fr'],
    },
    vueI18n: '~/vueI18n.config.js',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',  //locale prefix added for every locale except default
    lazy: true,
    langDir: 'locales/',
    // detectBrowserLanguage: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: '18n_redirected',  //=> в кука хедера запроса будет иметь имя 18n_redirected, а ее значение равно defaultLocale.
      cookieDomain: process.env.NUXT_ENV_COOKIE_DOMAIN || 'localhost',
      onlyOnRoot: true,  //детекция броузерного языка будет проходить только при посещении корневой страницы сайта.
      alwaysRedirect: true,  //перекидывать на язык
      fallbackLocale: 'en'
    }
  },
}

let detectBrowserLanguage = `
Browser language is detected either from
-navigator when running on client-side,
-accept-language HTTP header.

Однако при включенном detectBrowserLanguage редирект на user-предпочитаемый язык происходит уже на сервере,
ЯндексМетрике не нравиться.

Клиент впервые зашел на главную. Изменил язык.
В url добавился префикс fr -  https://grtest.website/fr/
Повторно заходим на главную (не указывая префикс, а по чистому адресу https://grtest.website/),
и далее сначало грузиться defaultLocale, и лишь затем переизменяется на fr.

Это надо решить by middleware, а не by detectBrowserLanguage.

`





