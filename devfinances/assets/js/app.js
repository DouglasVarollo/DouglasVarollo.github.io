const App = {
  init() {
    Transaction.all.forEach(DOM.addTransaction);

    DOM.updateBalance();

    Storage.set('dev.finances:transactions', Transaction.all, true);
  },

  reload() {
    DOM.clearTransactions();
    App.init();
  }
};
