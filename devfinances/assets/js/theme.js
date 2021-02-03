const Theme = {
  isDarkTheme: Storage.get('dev.finances:dark-theme', true),

  get() {
    if (Theme.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  },

  set(condition) {
    Storage.set('dev.finances:dark-theme', condition, true);
    Theme.setIsDarkTheme(condition);
  },

  setIsDarkTheme(condition) {
    Theme.isDarkTheme = condition;
  },

  toggle() {
    Theme.set(!Theme.isDarkTheme);
    Theme.get();
  }
};
