import projectsArray from '../helpers/projectsArray';

const createProjectCards = (item) => {
  const domString = `
     <div class="project-cards">
        <h2 class="title-project">${item.title}</h2>
        <div class="photo-container">
            <img src= ${item.screenshot} alt="screenshot" class="project-photo"/>
        </div>    
            <p> ${item.description}</p>
            <p> ${item.technologiesUsed}</p>
            <button><a href=${item.url}> Project Website</a></button>
            <button><a href=${item.githubUrl}>GitHub</a></button>
      </div>`;
  return domString;
};

const displayProjects = () => {
  const projects = projectsArray.getProjects();
  projects.forEach((item) => {
    $('#app').append(createProjectCards(item));
  });
};

export default { displayProjects };
