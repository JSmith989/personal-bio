import projectData from '../../helpers/data/projectData';
import cards from '../projectCards';

const boardView = () => {
  projectData.getProjects().then((response) => {
    response.forEach((item) => {
      $('#app').append(cards.createProjectCards(item));
    });
  });
};

export default { boardView };
