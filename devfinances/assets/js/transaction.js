const Transaction = {
  all: Storage.get('dev.finances:transactions', true) || [],
  current_index: null,

  add(transaction) {
    Transaction.all.push(transaction);
    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);
    App.reload();
  },

  edit(index) {
    Transaction.current_index = index;

    Modal.open(true);
  },

  update(index, updatedTransaction) {
    const { description, amount, date } = updatedTransaction;

    Transaction.all[index] = {
      description,
      amount,
      date
    };

    App.reload();
    Modal.setIsEditing(false);
  },

  incomes() {
    let income = 0;

    Transaction.all.forEach(function (transaction) {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });

    return income;
  },

  expenses() {
    let expense = 0;

    Transaction.all.forEach(function (transaction) {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });

    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  }
};
