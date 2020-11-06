import '../styles/main.scss';
import intro from './components/intro';
import aboutMe from './components/aboutMe';
import projectsView from './components/views/projectsView';

$('#flowers').hide().fadeIn(2500);

const init = () => {
  intro.myIntro();
  aboutMe.myStory();
  projectsView.boardView();
};

init();
