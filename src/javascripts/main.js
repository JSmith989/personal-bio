import '../styles/main.scss';
import projectCards from './components/projectCards';
import intro from './components/intro';

const init = () => {
  intro.myIntro();
  projectCards.displayProjects();
};

init();
