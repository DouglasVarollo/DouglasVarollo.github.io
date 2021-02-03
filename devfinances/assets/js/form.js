const Form = {
  description: document.querySelector('#description'),
  amount: document.querySelector('#amount'),
  date: document.querySelector('#date'),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value
    };
  },

  formatValues() {
    let { description, amount, date } = Form.getValues();

    amount = Utils.formatAmount(amount);
    date = Utils.formatDate(date);

    return {
      description,
      amount,
      date
    };
  },

  clearFields() {
    Form.description.value = '';
    Form.amount.value = '';
    Form.date.value = '';
  },

  validateFields() {
    const { description, amount, date } = Form.getValues();

    if (
      description.trim() === '' ||
      amount.trim() === '' ||
      date.trim() === ''
    ) {
      throw new Error('Por favor, preencha todos os campos');
    }
  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validateFields();

      const index = Transaction.current_index;
      const transaction = Form.formatValues();

      if (Modal.isEditing) {
        Transaction.update(index, transaction);
      } else {
        Transaction.add(transaction);
      }

      Form.clearFields();
      Modal.close();
    } catch (error) {
      alert(error.message);
    }
  },

  updateFields({ description, amount, date }) {
    Form.description.value = description;
    Form.amount.value = Utils.parseAmount(amount);
    Form.date.value = Utils.parseDate(date);
  }
};
