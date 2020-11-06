import axios from 'axios';

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get('https://personal-bio-b8b22.firebaseio.com/projects.json')
    .then((response) => {
      const allProjects = response.data;
      const projectArray = [];
      if (allProjects) {
        Object.keys(allProjects).forEach((projectId) => {
          projectArray.push(allProjects[projectId]);
        });
      }
      resolve(projectArray);
    })
    .catch((error) => reject(error));
});

export default { getProjects };
