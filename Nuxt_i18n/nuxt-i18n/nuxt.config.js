
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
        code: 'ru',
        file: 'ru.json',
        iso: 'ru'   //used for SEO features and for matching browser locales when using detectBrowserLanguage functionality.
      },
      {
        name: 'English',
        code: 'en',          //unique identifier of the locale
        file: 'en.json',     //resolved relative to langDir_path
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
    detectBrowserLanguage: false,   //почему false?
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: CookieName.LANGUAGE,
    //   cookieDomain: process.env.NUXT_ENV_COOKIE_DOMAIN || 'localhost',
    //   onlyOnRoot: true,
    //   alwaysRedirect: true,
    //   fallbackLocale: 'en'
    // }
  },
}
