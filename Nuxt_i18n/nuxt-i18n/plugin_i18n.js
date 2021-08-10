export default function({ app }) {
  // onLanguageSwitched called right after a new locale has been set
  // сохраняем новую языковую локализацию в Store при ее переключении
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    if (app.store) {
      app.store.commit('tech/setLangSwitched', true);
    }
  };
}






