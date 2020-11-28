const myIntro = () => {
  const domString = `
  <div class="my-name"> Jordan Smith </div>
  <div class="my-tech">
  <i class="fab fa-html5 fa-2x fa-color p-3"></i>
  <i class="fab fa-js-square fa-2x fa-color p-3"></i>
  <i class="fab fa-bootstrap fa-2x fa-color p-3"></i>
  <i class="fab fa-sass fa-2x fa-color p-3"></i>
  <i class="fab fa-github fa-2x fa-color p-3"></i>
  <i class="fab fa-css3-alt fa-2x fa-color p-3"></i>
  <i class="fab fa-node-js fa-2x fa-color p-3"></i>
  <i class="fab fa-git fa-2x fa-color p-3"></i>
  <i class="fab fa-npm fa-2x fa-color p-3"></i>
  <i class="fab fa-react fa-2x fa-color p-3"></i>


  </div>
  `;
  $('#intro').html(domString);
};

export default { myIntro };
