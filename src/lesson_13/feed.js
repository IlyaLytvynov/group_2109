const feed = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    likes: 500,
    comments: 300,
    title: 'Beautiful mounts',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1556046785-90b800412d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    likes: 150,
    comments: 14,
    title: 'Beautiful mounts 2',
  },
];

function renderImages() {
  const feedDomNode = document.querySelector('.feed');
  console.log(feedDomNode);
  const imgDomNodes = feed.map(function(post) {
    const template = `
      <div class="feed__item">
        <img src="${post.imgUrl}" alt="${post.title}" />
        <div class="feed__overlay">
          <h2>${post.title}</h2>
          <span>Likes:${post.likes}</span>
        </div>
      </div>
    `;

    return template;
  });

  feedDomNode.innerHTML = imgDomNodes.join('');
}

renderImages();
