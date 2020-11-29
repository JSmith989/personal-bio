const myIntro = () => {
  const domString = `
 
  <div class="p-2 mt-1">
      <p class="back p-2 mt-1 border border-white">
      Born and raised in Michigan. Now currently in Nashville, Tennessee with my beautiful wife and son. I became interested in development because I love the puzzle like aspect of it.
      Creativity has always been a big part of my personality. Whether I'm writing music or code, I love the process of planning, designing, and executing projects. 
      Along with creativity, my determination to fix an issue is what's going to help me succeed. </p>
    </div>
  `;
  $('#intro').html(domString);
};

export default { myIntro };
