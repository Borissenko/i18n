import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


const numberFormats = {     //валюта
  "en-US": {
    currency: {
      style: "currency",
      currency: "USD"
    }
  },
  "en-GB": {
    currency: {
      style: "currency",
      currency: "GBP"
    }
  },
  "de": {
    currency: {
      style: "currency",
      currency: "EUR"
    }
  }
}

const setDateTimeFormats = {   //дата
    short: {
      year: "2-digit",  //2-digit, numeric
      month: "short",   //2-digit, numeric, narrow, short or long
      day: "2-digit"    //2-digit, numeric, narrow, short or long
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric"
    }
  }
}

const dateTimeFormats = {
  en: setDateTimeFormats,
  "en-GB": setDateTimeFormats,
  de: setDateTimeFormats
}


function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
  messages: loadLocaleMessages(),  //запрашиваются файлы из src/locales/en.json and returns the messages for each locale.
  dateTimeFormats,
  numberFormats
})





