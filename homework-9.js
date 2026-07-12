import { userComments } from "./comments.js";

// 2. Фильтрация
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = numbers.filter(num => num >= 5);
console.log(newArr);

// 3. Поиск
const products = ["яблоки", "бананы", "помидоры", "огурцы", "хлеб", "молоко", "сыр", "масло", "сахар", "соль"];
console.log(products.includes("молоко"));
console.log(products.includes("сахар"));

// 4. Перевернуть (создать свою функцию)
function reverseData(array) {
  return [...array].reverse();
}
console.log(reverseData(products));
console.log(reverseData(numbers));

// 7. Вывод почты с '.com'
console.log(userComments.filter(com => com.email.includes(".com")));

// 8. Изменить postID
userComments.forEach(com => {
  com.postId = com.id <= 5 ? 2 : 1;
});
console.log(userComments);

// 9. Оставить только id и name
const newArrayComments = userComments.map(obj => ({
  id: obj.id,
  name: obj.name
}));
console.log(newArrayComments);

// 10. Добавить новое свойство isInvalid
userComments.forEach(obj => {
  obj.isInvalid = obj.body.length >= 180;
});
console.log(userComments);

// 11. reduce
const emailArr = userComments.reduce((arr, curr) => {
  arr.push(curr.email);
  return arr;
}, []);
console.log(emailArr);

// 12. массив в пункте 11 к строке
console.log(emailArr.join(';'));
