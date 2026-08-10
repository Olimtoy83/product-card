import { registrationModal } from './modal.js';
import { registrationForm } from './Form.js';
const subscribeForm = document.querySelector('.subscribe-form');
const subscribeInput = document.querySelector('.subscribe-input');

function getFormData(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  return data;
}

subscribeForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = getFormData(subscribeForm);
  console.log(formData);
});

let user;

const regForm = document.querySelector('.reg-form');

regForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const isValid = registrationForm.isValid();

  const password = document.querySelector('#password');
  const repeatpassword = document.querySelector('#repeatpassword');
  const isPasswordsMatch = password.value === repeatpassword.value;

  if (!isValid || !isPasswordsMatch) {
    alert('Регистрация отклонена');
  } else {
    user = registrationForm.getValues();
    user.createdOn = new Date();
    console.log(user);
    registrationModal.close();
  };
});
