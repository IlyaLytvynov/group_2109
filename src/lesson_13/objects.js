const post1 = {
  imgUrl:
    'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  likes: 500,
  comments: 300,
  test: 'Hello',
};

const post2 = {
  imgUrl:
    'https://images.unsplash.com/photo-1556046785-90b800412d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  likes: 500,
  comments: 300,
};

const feed = [post1, post2];

const transform = (arr, transformer) => {
  const result = [];
  for (let helloWorld of arr) {
    result.push(transformer(helloWorld));
  }
  return result;
};

const numbers = transform([1, 3, 20, 40, 40], num => {
  return num * 10;
});

const strings = transform(['test', 'hello', 'john'], str => {
  return str.toUpperCase();
});

function getImageUrl(arg) {
  return arg.imgUrl;
}

const images1 = transform(feed, getImageUrl);

const images2 = feed.map(function(arg) {
  return arg.imgUrl;
});

console.log(images1);
