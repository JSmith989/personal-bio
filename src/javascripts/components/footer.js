const theFoots = () => {
  const domString = `
  <div class="navbar navbar-dark bg-dark">
  
  <a href="mailto:jordansmith989@gmail.com">
  <i class="far fa-envelope fa-2x fa-color p-3"></i>
  </a>


  <a href="https://www.linkedin.com/in/jordansmith989/">
  <i class="fab fa-linkedin-in fa-2x fa-color p-3"></i>
  </a>


  <a href="https://www.instagram.com/we_natives/">
  <i class="fab fa-instagram fa-2x fa-color p-3"></i>
  </a>


  <a href="https://github.com/JSmith989">
    <i class="fab fa-github fa-2x fa-color p-3"></i>
    </a>

</div>
    `;
  $('#footer').html(domString);
};

export default { theFoots };
