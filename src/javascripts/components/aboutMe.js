const myStory = () => {
  const domString = `
    <div id="about-text" class="card" style="width: 19rem;">
    <div class="card-body">
      <p class="card-text">Born and raised in Michigan. Now currently in Tennessee with my beautiful wife and son. 
      Creativity has always been a big part of my personality. Whether I'm writing music or code, I love the process of planning, designing, and executing projects.  </p>
    </div>
  </div>
  `;
  $('#about-me').html(domString);
};

export default { myStory };
