const myIntro = () => {
  const domString = `
  <div class="my-name"> Jordan Smith </div>
  <div class="my-tech">
  <i class="fab fa-html5 fa-3x fa-color"></i>
  <i class="fab fa-js-square fa-3x fa-color"></i>
  <i class="fab fa-bootstrap fa-3x fa-color"></i>
  <i class="fab fa-sass fa-3x fa-color"></i>
  <i class="fab fa-github fa-3x fa-color"></i>
  <i class="fab fa-css3-alt fa-3x fa-color"></i>
  <i class="fab fa-node-js fa-3x fa-color"></i>
  <i class="fab fa-git fa-3x fa-color""></i>


  </div>
  `;
  $('#intro').html(domString);
};

export default { myIntro };
