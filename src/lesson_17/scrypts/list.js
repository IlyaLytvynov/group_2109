import { Post } from './post';

export class List {
  constructor(target = document.querySelector('body'), onDelete) {
    this.target = target;
    this.ul = document.createElement('ul');
    this.onDelete = onDelete;
    this.listItems = [];
  }

  renderList(posts) {
    this.ul.innerHTML = '';
    for (let post of posts) {
      this.renderOne(post);
    }

    this.target.appendChild(this.ul);
  }

  deleteHandler(id) {
    this.onDelete(id);
  }

  renderOne(post) {
    this.listItems.push(new Post(this.ul, post, id => this.deleteHandler(id)));
  }
}
