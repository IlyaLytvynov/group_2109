import './trafficLighter.scss';
import { Switcher } from './switcher';

export class TrafficLighter {
  constructor(
    target = document.querySelector('body'),
    colors = ['red', 'yellow', 'green'],
    intervalSpeed = 2000,
  ) {
    this.intervalSpeed = intervalSpeed;
    this.target = target;
    this.switcher = null;
    this.conteiner = document.createElement('div');
    this.lights = [];
    this.colors = colors;
    this.intervalId = null;
    this.activeIndex = 2;
    this.isActive = false;
  }

  disable() {
    this.isActive = false;
    clearInterval(this.intervalId);
    this.lights[this.activeIndex].classList.remove('active');
    this.activeIndex = 0;
  }

  enable() {
    this.isActive = true;
    this.lights[this.activeIndex].classList.add('active');
    this.intervalId = setInterval(() => {
      this.lights[this.activeIndex].classList.remove('active');
      if (this.activeIndex < 2) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }

      this.lights[this.activeIndex].classList.add('active');
    }, this.intervalSpeed);
  }

  init() {
    this.conteiner.classList.add('lighter');

    for (let color of this.colors) {
      const light = document.createElement('div');

      light.classList.add('lighter__light');
      light.classList.add(`lighter__light_${color}`);

      this.lights.push(light);
      this.conteiner.appendChild(light);
    }

    this.switcher = new Switcher(this.conteiner, this);
    this.target.appendChild(this.conteiner);
  }
}
