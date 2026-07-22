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

const regBtn = document.querySelector('.reg-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

regBtn.addEventListener('click', function () {
  modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('modal-showed');
});

let user;

const regForm = document.querySelector('.reg-form');

regForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const isValid = regForm.checkValidity()

  const password = document.querySelector('#password');
  const repeatpassword = document.querySelector('#repeatpassword');
  const isPasswordsMatch = password.value === repeatpassword.value

  if (!isValid || !isPasswordsMatch) {
    alert('Регистрация отклонена');
  } else {
    user = getFormData(regForm);
    user.createdOn = new Date();
    console.log(user);
    modal.classList.remove('modal-showed');
  };
});