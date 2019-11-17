import '../styles/post.scss';
export class Post {
  constructor(target, post, onDelete) {
    this.target = target;
    this.post = post;
    this.onDelete = onDelete;
    this.render();
  }

  render() {
    this.li = document.createElement('li');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    this.li.classList.add('post');

    setTimeout(() => {
      this.li.classList.add('post_visible');
    }, 10);

    btn.addEventListener('click', () => {
      this.target.removeChild(this.li);
      this.onDelete(this.post.id);
    });

    btn.textContent = 'remove';
    h2.textContent = this.post.title;
    p.textContent = this.post.content;

    this.li.appendChild(h2);
    this.li.appendChild(p);
    this.li.appendChild(btn);

    if (this.target.childNodes.length > 0) {
      console.log(this.target.childNodes);
      this.target.insertBefore(this.li, this.target.childNodes[0]);
    } else {
      this.target.appendChild(this.li);
    }
  }

  remove() {
    this.target.removeChild(this.li);
  }
}
