export class Post {
  constructor(target, post) {
    this.target = target;
    this.post = post;
    this.render();
  }

  render() {
    this.li = document.createElement('li');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    this.li.classList.add('list-item');
    h2.textContent = this.post.title;
    p.textContent = this.post.content;

    this.li.appendChild(h2);
    this.li.appendChild(p);
    this.target.appendChild(this.li);
  }

  remove() {
    this.target.removeChild(this.li);
  }
}