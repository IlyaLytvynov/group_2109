export class Form {
  constructor(target = document.querySelector('body'), onSubmit) {
    this.target = target;
    this.onSubmit = onSubmit;
    this.render();
  }

  render() {
    this.form = document.createElement('form');
    const input = document.createElement('input');
    const textarea = document.createElement('textarea');
    const btn = document.createElement('button');

    input.placeholder = 'Title';
    textarea.placeholder = 'Content';

    btn.textContent = 'Add';

    this.form.addEventListener('submit', eventObject => {
      console.log('DATA SEND:', eventObject);
      eventObject.preventDefault();
      this.onSubmit({
        title: input.value,
        content: textarea.value
      });
      input.value = '';
      textarea.value = '';
    });

    this.form.appendChild(input);
    this.form.appendChild(textarea);
    this.form.appendChild(btn);
    this.target.appendChild(this.form);
  }
}
