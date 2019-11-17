import { Form } from './form';
import { List } from './list';
import { runInThisContext } from 'vm';

export class PostsBox {
  constructor(target = document.querySelector('body')) {
    this.posts = [];
    this.form = new Form(target, data => this.sendData(data));
    this.list = new List(target, id => this.remove(id));
    this.fetchPosts();
  }

  remove(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:3000/posts/${id}`);

    xhr.send();
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      if (xhr.status >= 400) {
        alert('Not deleted');
      }
    });
  }

  sendData(data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/posts');

    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', () => {
      const post = JSON.parse(xhr.response);
      this.posts.push(post);
      this.list.renderOne(post);
    });
  }

  fetchPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/posts');
    xhr.send();
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      this.posts = JSON.parse(xhr.response);
      this.list.renderList(this.posts);
    });
  }
}
