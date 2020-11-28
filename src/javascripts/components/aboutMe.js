const myStory = () => {
  const domString = `
  <div class="flip-container">
  <div class="flipper">
    <div class="front portrait">
    <img class="myself" src="https://user-images.githubusercontent.com/67443077/100527452-3b9f0780-3198-11eb-8647-9eb2616832a3.png" alt="me" />
    </div>
    <div class="back">
      <p class="p-2 mt-1">
      Born and raised in Michigan. Now currently in Nashville, Tennessee with my beautiful wife and son. I became interested in development because I love the puzzle like aspect of it.
      Creativity has always been a big part of my personality. Whether I'm writing music or code, I love the process of planning, designing, and executing projects. 
      Along with creativity, my determination to fix an issue is what's going to help me succeed. </p>
      </div>
      </div>
      </div>
  `;
  $('body').on('click', '.flip-container .flipper', (e) => {
    e.stopImmediatePropagation();
    $(this).css('transform, rotateY(180deg)');
  });
  $('#aboutMe').html(domString);
};

export default { myStory };
