import '../styles/main.scss';
import projectCards from './components/projectCards';
import intro from './components/intro';
import aboutMe from './components/aboutMe';

const init = () => {
  intro.myIntro();
  projectCards.displayProjects();
  aboutMe.myStory();
};

init();
