// task 1

const name = "«Генератор защитного поля»"; // Write code on this line
let price = 1000; // Write code on this line
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

console.log(firstMessage); // console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

console.log(secondMessage); // console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

// task 2

const invoice = 100;
const stock = 100;

// Write code under this line
let message;

if (invoice === 100) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else if (invoice === 50) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else if (invoice === 150) {
  message = "На складе недостаточно товаров!";
}
console.log(message); //console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
