import { products } from './products-cards.js';


const productTemplate = document.getElementById('product-template');
const productsList = document.querySelector('.products');


function getCardsCount() {
  const input = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = parseInt(input, 10);
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Некорректный ввод! Будут отображены все 5 карточек.");
    return 5;
  }
  return count;
}

function renderProducts(productsArray) {
  const maxCards = getCardsCount();
  productsArray.forEach((product, index) => {
    if (index >= maxCards) {
      return;
    }

    const productCopy = productTemplate.content.cloneNode(true);
    productCopy.querySelector('.card__images').src = `images/${product.image}.png`;
    productCopy.querySelector('.card__images').alt = `Товар ${product.name}`;
    productCopy.querySelector('.card__name').textContent = product.name;
    productCopy.querySelector('.card__category').textContent = product.category;
    productCopy.querySelector('.card__description').textContent = product.description;

    const compoundList = productCopy.querySelector('.compound__list');
    product.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.className = 'compound__ingredient';
      li.textContent = ingredient;
      compoundList.appendChild(li);
    });
    productCopy.querySelector('.card__price-value').textContent = `${product.price.toLocaleString('ru-RU')} ₽`;
    productsList.appendChild(productCopy);
  });
}

renderProducts(products);

const productDescriptions = products.reduce((acc, item) => {
  const singleProductObject = { [item.name]: item.description };
  acc.push(singleProductObject);
  return acc;
}, []);
console.log(productDescriptions);