function getColorNumber() {
  return Math.floor(Math.random() * 255);
}

function getRandomColor() {
  return `rgb(${getColorNumber()}, ${getColorNumber()}, ${getColorNumber()})`;
}

function lamp(target, speed = 2000) {
  let intervalId;
  const lampElement = document.createElement('button');
  lampElement.classList.add('lamp');

  const colorSwitcher = () => {
    lampElement.style.backgroundColor = getRandomColor();
  };

  const clickHandler = function() {
    lampElement.classList.toggle('active');
    lampElement.style.backgroundColor = getRandomColor();

    clearInterval(intervalId);
    intervalId = setInterval(colorSwitcher, speed);
  };
  lampElement.onclick = clickHandler;

  target.appendChild(lampElement);
}
for (let i = 0; i < 5; i++) {
  lamp(document.querySelector('body'), Math.floor(Math.random() * 5000));
}
