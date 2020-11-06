# Personal Bio
![bio-pic](./images/personal-bio.png)


## Deploy Status
deployed via firebase https://personal-bio-b8b22.web.app/


## About This Project
This project is going to continue changing as I get learn throughout the class. It is using a database to pull the info about the projects and display them.



## Code Snippet
```
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
```
