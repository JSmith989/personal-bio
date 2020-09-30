import '../styles/main.scss';
import projectCards from './components/projectCards';
import intro from './components/intro';
import aboutMe from './components/aboutMe';

$('#flowers').hide().fadeIn(2500);

const init = () => {
  intro.myIntro();
  projectCards.displayProjects();
  aboutMe.myStory();
};

init();
