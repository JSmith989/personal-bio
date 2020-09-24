const myStory = () => {
  const domString = `
    <p>
        <button id="my-story">My Story</button>
        <button id="social-media">Social Media</button>
    </p>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  `;
  $('#about-me').html(domString);
};

export default { myStory };
