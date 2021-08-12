

//узнать, какой язык в i18n
this.$i18n.locale             //vue, nuxt
context.app.i18n.locale        //nuxt

this.$i18n.locales       //запрос заявленных в nuxt.config.js языков, [{}, ]



//переключение языка i18n
//<< это промис!!!
await this.$i18n.locale = 'ru'       //vue
await this.$i18n.setLocale('ru')     //nuxt



// ТЕРРИТОРИАЛЬНАЯ локализация БРОУЗЕРА
navigator.languages                  //
navigator.language.substring(0, 2)   //["en-US", "en", "ru"]

const browserLang = navigator.language.split(';')[0].split(',')[0].substring(0, 2)   // 'en-US,en;q=0.9,ru;q=0.8'


//получение куков броузера
const langCookie = this.$nuxt.context.$cookies.get(cookieName)      //nuxt
const cookies = document.cookie  //к слову, операция записи изменяет только то куки, которое было указано

function separateCookie(cookies, cookieName) {
  if(!cookies)
    return ''
  
  let cookieArray = cookies.split(';')
  let cookieValue = ''
  
  for(let cookie of cookieArray) {
    let cookiePieces = cookie.trim().split('=')
    if(cookiePieces[0] === cookieName) {
      return  cookieValue = cookiePieces[1]
    }
  }
  return cookieValue
}




