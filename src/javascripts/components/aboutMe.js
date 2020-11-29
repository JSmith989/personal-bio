const myStory = () => {
  const domString = `
  <div class="my-name"> Jordan Smith </div>
  <div class="container">
    <div class="portrait">
      <img class="myself" src="https://user-images.githubusercontent.com/67443077/100527452-3b9f0780-3198-11eb-8647-9eb2616832a3.png" alt="me" />
    </div>
  </div>
  <div class="my-title"> Full Stack Developer </div>
  <div class="my-tech">
  <i class="fab fa-html5 fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-js-square fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-bootstrap fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-sass fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-github fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-css3-alt fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-node-js fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-git fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-npm fa-2x fa-color-2 p-3"></i>
  <i class="fab fa-react fa-2x fa-color-2 p-3"></i>


  </div>
  `;
  $('#aboutMe').html(domString);
};

export default { myStory };
