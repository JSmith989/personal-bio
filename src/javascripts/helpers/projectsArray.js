const projects = [
  {
    title: 'Bloomers',
    screenshot: '../images/bloomers.png',
    description: 'I know what you are thinking and yes, there is FINALLY a website where you can buy your favorite pants.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://bloomers.netlify.app/',
    githubUrl: 'https://github.com/JSmith989/bloomers',
  },
  {
    title: 'Pet Adoption',
    screenshot: '/images/pet-adoption.png',
    description:
      'This pet adoption website allows you to browse through and filter by animal type so you can find your perfect pet. ',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://adopt-animals.netlify.app/',
    githubUrl: 'https://github.com/JSmith989/pet-adoption',
  },
  {
    title: 'LOTR Chat',
    screenshot: '../images/lotr-chatty.png',
    description:
      'Have you found yourself wondering where you can talk about Lord of the Rings with other people? Look no further!',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github, Sass, JQuery',
    available: true,
    url: 'https://lotr-chatty.netlify.app/',
    githubUrl:
      'https://github.com/nss-evening-cohort-13/chatty-delta/tree/master',
  },
  {
    title: 'Tamagotchi',
    screenshot: '../images/tamagotchi.png',
    description:
      'We really missed our Tamagotchi pets from way back in the day, so we decided to bring them back.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github, Sass, JQuery',
    available: true,
    url: 'https://jstamagotchi.netlify.app/',
    githubUrl: 'https://github.com/JSmith989/Tamagotchi',
  },
  {
    title: 'Dino Kennel',
    screenshot: '../images/dino-kennel.png',
    description: 'Dinos... I love them, you love them, but lets face it sometimes we need to take a vacation from them. Store them here.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github, Sass, JQuery',
    available: true,
    url: 'https://dino-place.netlify.app/',
    githubUrl: 'https://github.com/JSmith989/dino-kennel',
  },
  {
    title: 'Bear Watcher',
    screenshot: '../images/bear-watch.png',
    description: 'Keep track of your bears with this easy to use bear watching site.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://bear-track.netlify.app/',
    githubUrl: 'https://github.com/JSmith989/bear-watcher',
  },
  {
    title: 'Sorting Hat',
    screenshot: '../images/sorting-hat.png',
    description:
      'Starting wizardry school? Click to find out which house you belong to with this random house generator.',
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://hogwarts-sort.netlify.app/',
    githubUrl: 'https://github.com/JSmith989/sorting-hat',
  },
];

const getProjects = () => projects;

export default { getProjects };
