const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card-button');
const greenColorHash = "#c1ecea";
const blueColorHash = "#25b69192";

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach(card => {
    card.style.backgroundColor = greenColorHash;
  });
});

const firstProductCards = document.querySelector('.card')
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCards.style.backgroundColor = blueColorHash;
});

const openGoogleButton = document.querySelector('#open-google-button');
openGoogleButton.addEventListener('click', openGoogle);
function openGoogle() {
  const unswer = confirm('Вы уверены, что хотите открыть страницу Google.com?');
  if (unswer === true) {
    window.open('https://www.google.com');
  }
}

const outputConsoleLogButton = document.querySelector('#output-console-log');
outputConsoleLogButton.addEventListener('click', () => outputConsoleLog("Дз №6"));

function outputConsoleLog(message) {
  alert("Дз №6");
  console.log(message);
}

const catalogTitle = document.querySelector('#catalog-title');
catalogTitle.addEventListener('mouseenter', (event) => {
  console.log(event.target.textContent);
});

const toggleBtn = document.querySelector('#toggle-color-button');
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
});