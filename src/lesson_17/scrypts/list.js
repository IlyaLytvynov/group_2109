import {Post} from './post';

export class List {
  constructor(target = document.querySelector('body')) {
    this.target = target;
    this.posts = [];
    this.fetchPosts();
   
  }

  fetchPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/posts');
    xhr.send();
    xhr.onload = () => {
      console.log(xhr.response);
      this.posts = JSON.parse(xhr.response);
      this.renderList();
    }
  }

  renderList() {
    this.ul = document.createElement('ul');
    for(let post of this.posts) {
      new Post(this.ul, post);
    }

    this.target.appendChild(this.ul);
  }
}