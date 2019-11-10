export class Switcher {
  /**
   * @param controlledInstance Object
   * @param controlledInstance.enable Function
   * @param controlledInstance.disable Function
   */
  constructor(target = document.querySelector('body'), controlledInstance) {
    this.target = target;
    this.isActive = false;
    this.btn = document.createElement('button');
    this.btn.textContent = 'TOggle';
    this.btn.onclick = () => {
      this.toggle();
    };
    this.target.appendChild(this.btn);
    this.controlledInstance = controlledInstance;
  }

  toggle() {
    if (this.isActive) {
      this.disable();
    } else {
      this.enable();
    }
  }

  enable() {
    this.isActive = true;
    this.btn.classList.add('active');
    this.controlledInstance.enable();
  }

  disable() {
    this.isActive = false;
    this.btn.classList.remove('active');
    this.controlledInstance.disable();
  }
}

var SwitcherOld = function(
  target = document.querySelector('body'),
  controlledInstance,
) {
  this.target = target;
  this.isActive = false;
  this.btn = document.createElement('button');
  this.btn.textContent = 'TOggle';
  this.btn.onclick = () => {
    this.toggle();
  };
  this.target.appendChild(this.btn);
  this.controlledInstance = controlledInstance;
};

SwitcherOld.prototype.enable = function() {
  this.isActive = true;
  this.btn.classList.add('active');
  this.controlledInstance.enable();
};

SwitcherOld.prototype.disable = function() {
  this.isActive = false;
  this.btn.classList.remove('active');
  this.controlledInstance.disable();
};

SwitcherOld.prototype.toggle = function() {
  if (this.isActive) {
    this.disable();
  } else {
    this.enable();
  }
};
