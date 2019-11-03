import './lesson_13.scss';
import './objects.js';
import './feed';
const cart = ['Test', 'John'];

const setToCart = () => {
  // Function expression
  const productName = prompt('What you want?');
  cart.push(productName);
};

const printList = () => {
  // Function declaration
  output.innerHTML = '';
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    output.innerHTML = output.innerHTML + '<li>' + product + '</li>';
  }

  for (let product of cart) {
    output.innerHTML = output.innerHTML + '<li>' + product + '</li>';
  }
};

printList();

function startProgram() {
  setToCart();
  printList();
}

clickMeBtn.onclick = startProgram;
