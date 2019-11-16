export class Form {
  constructor(target = document.querySelector('body')) {
    this.target = target;
    this.render();
  }

  render() {
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.textarea = document.createElement('textarea');
    this.btn = document.createElement('button');

    this.input.placeholder = 'Title';
    this.textarea.placeholder = 'Content';
    this.btn.textContent = 'Add';
    
    this.form.onsubmit = (eventObject) => {
      console.log(eventObject);
      eventObject.preventDefault();
      this.sendData();
    }

    this.form.appendChild(this.input);
    this.form.appendChild(this.textarea);
    this.form.appendChild(this.btn);
    this.target.appendChild(this.form);
  }

  sendData() {
    const title = this.input.value;
    const content = this.textarea.value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/posts');
    const data = {title, content};
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
      console.log(xhr.response);
    }
  }
}