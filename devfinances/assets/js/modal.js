const Modal = {
  isEditing: false,
  title: document.querySelector('.modal #form h2'),

  open(isEditing) {
    if (isEditing) {
      const transaction = Transaction.all[Transaction.current_index];

      Form.updateFields(transaction);
      Modal.setIsEditing(true);

      Modal.setTitle('Editar Transação');
    } else {
      Form.clearFields();

      Modal.setTitle('Nova Transação');
    }

    document.querySelector('.modal-overlay').classList.add('active');
  },

  close() {
    document.querySelector('.modal-overlay').classList.remove('active');
  },

  setIsEditing(condition) {
    Modal.isEditing = condition;
  },

  setTitle(title) {
    Modal.title.innerText = title;
  }
};
