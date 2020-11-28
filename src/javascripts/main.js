import '../styles/main.scss';
import intro from './components/intro';
import aboutMe from './components/aboutMe';
import projectsView from './components/views/projectsView';
import footer from './components/footer';

const init = () => {
  intro.myIntro();
  aboutMe.myStory();
  projectsView.boardView();
  footer.theFoots();
};

init();
