import './trafficLighter.scss';

export function createLighter(target) {
  const conteiner = document.createElement('div');

  conteiner.classList.add('lighter');

  const lights = [];
  const colors = ['red', 'yellow', 'green'];
  let intervalId;
  let isActive = false;
  let activeIndex = 0;

  for (let color of colors) {
    const light = document.createElement('div');

    light.classList.add('lighter__light');
    light.classList.add(`lighter__light_${color}`);

    lights.push(light);
    conteiner.appendChild(light);
  }

  const btn = document.createElement('button');

  conteiner.appendChild(btn);
  btn.textContent = 'On/Off';

  btn.onclick = function() {
    if (isActive === false) {
      isActive = true;
      lights[activeIndex].classList.add('active');
      intervalId = setInterval(() => {
        lights[activeIndex].classList.remove('active');
        if (activeIndex < 2) {
          activeIndex++;
        } else {
          activeIndex = 0;
        }

        lights[activeIndex].classList.add('active');
      }, 2000);
    } else {
      isActive = false;
      clearInterval(intervalId);
      lights[activeIndex].classList.remove('active');
      activeIndex = 0;
    }
  };

  target.appendChild(conteiner);
}
