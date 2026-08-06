const productCard = document.querySelector('.products__item.card');
const changeCardColorBtn = document.querySelector('.change-card-color-btn');
const yellowColorsHash = '#F1C40F';

changeCardColorBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = yellowColorsHash;
});


const productCards = document.querySelectorAll('.products__item.card');
const changeCardsColorBtn = document.querySelector('.change-cards-color-btn');
const aquaColorsHash = '#00FFFF';

changeCardsColorBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = aquaColorsHash);
});


const openGoogleBtn = document.querySelector('.open-google');
const googleURL = "https://google.com";

openGoogleBtn.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google');

  if (answer === true) {
    window.open(googleURL)
  } else {
    return;
  }
};


const outputLogBtn = document.querySelector('.output-console-log');

outputLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
  alert('ДЗ №6')
  console.log(message)
};


const catalogTitle = document.querySelector('.catalog__title');

catalogTitle.addEventListener('mouseenter', (event) => {
  console.log(event.target.textContent);
});


const toggleBtn = document.querySelector('.toggle-color-button');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
});