const productCard = document.querySelector('.products__item.card');

const changeCardColorBtn = document.getElementById('change-color-first-card-button');
const yellowColorsHash = '#76bbb3';

changeCardColorBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = yellowColorsHash;
});

const productCards = document.querySelectorAll('.products__item.card');
const changeCardsColorBtn = document.getElementById('change-color-all-card-button');
const aquaColorsHash = '#3fc5c5';

changeCardsColorBtn.addEventListener('click', () => {
  productCards.forEach(card => {
    card.style.backgroundColor = aquaColorsHash;
  });
});


const openGoogleBtn = document.getElementById('open-google-button');
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


const outputLogBtn = document.getElementById('output-console-log');

outputLogBtn.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
  alert('ДЗ №6')
  console.log(message)
};


const catalogTitle = document.getElementById('catalog-title');

catalogTitle.addEventListener('mouseenter', (event) => {
  console.log(event.target.textContent);
});


const toggleBtn = document.getElementById('toggle-color-button');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
});