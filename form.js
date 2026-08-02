class Form {
  constructor(formId) {
    this.formElement = document.getElementById(formId);
  }
  getValues() {
    const formData = new FormData(this.formElement);
    const data = Object.fromEntries(formData.entries());
    return data;
  }
  isValid() {
    return this.formElement.checkValidity();
  }
  reset() {
    this.formElement.reset();
  }
}

const registrationForm = new Form('registrationForm');

export { registrationForm };