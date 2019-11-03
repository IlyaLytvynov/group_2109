import './lesson_12.scss';
const operandA = parseInt(prompt('A'));
const operandB = parseInt(prompt('B'));

function add(a, b) {
  alert(a + b);
}

function greet(name) {
  alert('Hello ' + name);
}

function reverseWord(word) {}

function findMaxValue(numbers) {
  let maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (maxValue < numbers[i]) {
      maxValue = numbers[i];
    }
  }
  alert(maxValue);
}

function calcTotal(numbers) {}

function totalPrice(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }

  alert('TOTAL PRICE', total);
}

const numbers = [23, 45, 34, 67, 2, 7];
add(10, 20);
greet(prompt('Eneter your name'));
findMaxValue([0, 3, 2, 150, 9, 39, 4, 5, 234, 543, 76, 89]);
findMaxValue(numbers);
calcTotal([2, 1, 3]);
// myCoolButton.onclick = add;
const products = [
  {
    price: 250,
    title: 'Phone',
  },
  {
    price: 300,
    title: 'Tv',
  },
  {
    price: 120,
    title: 'Tv2',
  },
  {
    price: 10,
    title: 'Headphones',
  },
];
console.log(products[0].price);
totalPrice(products);
