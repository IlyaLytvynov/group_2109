function article(target, title, content) {
  const div = document.createElement('div');
  const header = document.createElement('h2');
  const paragraph = document.createElement('p');

  header.classList.add('main__header');
  paragraph.classList.add('main__paragraph');
  header.style.background = 'rgb(255, 0, 0)';
  header.textContent = title;
  paragraph.textContent = content;

  div.appendChild(header);
  div.appendChild(paragraph);
  target.appendChild(div);
}

function button(target, title, clickHandler) {
  const button = document.createElement('button');
  const span = document.createElement('span');
  span.textContent = title;
  button.appendChild(span);
  target.appendChild(button);
  button.onclick = function() {
    clickHandler();
  };
}

button(document.querySelector('.test'), 'HELLO WORLD', function() {
  alert('Hello!');
});
button(document.querySelector('body'), 'Add article', function() {
  article(
    document.querySelector('body'),
    prompt('Enter header'),
    prompt('Eneter content'),
    'header_class_name',
  );
});
