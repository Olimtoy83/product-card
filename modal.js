class Modal {
  constructor(modalId) {
    this.modalElement = document.getElementById(modalId);
    this.bindCloseButton();
  }

  open() {
    this.modalElement.classList.add('modal-showed');
  }

  close() {
    this.modalElement.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }

  bindCloseButton() {
    const closeBtn = this.modalElement.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
      this.close();
    });
  }
}

const registrationModal = new Modal('registrationModal');

const regBtn = document.getElementById('openRegBtn');

regBtn.addEventListener('click', () => {
  registrationModal.open();
});

export { registrationModal };