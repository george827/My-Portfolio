const humburger = document.querySelector('.my-menu');
const navMenu = document.querySelector('.my-menu-nav');
const nav = document.querySelector('.nav');
const about = document.querySelector('.about');
const langRotate = document.querySelector('.lang-rotate');
const langList = document.querySelector('.lang-list');
const frameworks = document.querySelector('.arrow-frame');
const frameworkList = document.querySelector('.my-frame');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
  nav.classList.remove('active');
}));

// Dynamic Pages

const project = [
  {
    description: 'This is an innovative restaurant table reservation application designed to elevate your dining experience. Connecting diners with their desired culinary destination, this user-friendly app empowers users to browse and reserve available tables at their favorite restaurant. The app is powered by a Rails API backend.',
    description2: 'Restaurant table reservation app designed to elevate your dining experience. Connecting diners with their desired culinary destination, this user-friendly app empowers users to browse and reserve available tables at their favorite restaurant.',
    img1: ['./img/projects/restaurant/restaurant1.png', './img/projects/restaurant/restaurant2.png', './img/projects/restaurant/restaurant3.png'],
    img2: './img/projects/restaurant/restaurant1.png',
    technologies: ['React', 'Css', 'Redux'],
    liveDemo: 'https://book-reservation-h17l.onrender.com/',
    sourceCode: 'https://github.com/george827/Book-reservation-Front_End.git',
    title1: 'Restaurant Table',
    title2: 'Restaurant Table',
  },
  {
    description: 'An online school for software development. Students get to collaborate with other students all around the world, bulding real projects.',
    description2: 'An online school for software development. Students get to collaborate with other students all around the world, bulding real projects.',
    img1: ['img/projects/capstone/Cap1.png', 'img/projects/capstone/Cap2.png', 'img/projects/capstone/Cap3.png'],
    img2: 'img/projects/capstone/Cap1.png',
    technologies: ['Html', 'Css', 'Javascript'],
    liveDemo: 'https://george827.github.io/Capstone-one/',
    sourceCode: 'https://github.com/george827/Capstone-one',
    title1: 'Excel Academy',
    title2: 'Excel Academy',
  },
  {
    description: 'Budget app is an app for managing transactions with categorized lists, sign-up and login pages, and navigation buttons for moving between pages. Users can add new categories or transactions.',
    description2: 'Budget app is an app for managing transactions with categorized lists, sign-up and login pages, and navigation buttons for moving between pages. Users can add new categories or transactions',
    img1: ['img/projects/budget/budgetApp1.png', 'img/projects/budget/budgetApp2.png', 'img/projects/budget/budgetApp3.png'],
    img2: 'img/projects/budget/budgetApp1.png',
    technologies: ['Ruby', 'Rails', 'Javascript'],
    liveDemo: 'https://budget-n0m8.onrender.com/',
    sourceCode: 'https://github.com/george827/budget-app',
    title1: 'Budget App',
    title2: 'Bugget App',
  },
  {
    description: 'Space X project is a react-redux project that use space x API to display a list of rockets and mission. Rocket can be reserved and mission can joined. Users can access the personal list the profile section',
    description2: 'Space X project is a react-redux project that use space x API to display a list of rockets and mission. Rocket can be reserved and mission can joined. Users can access the personal list the profile section',
    img1: ['./img/projects/spaceTravellers/SpaceTravellers1.png', './img/projects/spaceTravellers/SpaceTravellers2.png', './img/projects/spaceTravellers/SpaceTravellers3.png'],
    img2: './img/projects/spaceTravellers/SpaceTravellers1.png',
    technologies: ['React', 'Redux', 'Css'],
    liveDemo: 'https://space-travelers-6imy.onrender.com/',
    sourceCode: 'https://github.com/george827/space-travelers-hub-react-redux',
    title1: 'Space Travelers',
    title2: 'Space Travelers',
  },
];

const section = document.querySelector('.works_section');
const popup = document.querySelector('.popup-window');

project.forEach((projects) => {
  const article = document.createElement('article');
  const divImg = document.createElement('div');
  const elements = document.createElement('div');
  const button = document.createElement('button');

  divImg.innerHTML = `
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="carImg" src="${projects.img1[0]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="carImg" src="${projects.img1[1]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img class="carImg" src="${projects.img1[2]}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
  `;

  article.classList.add('card1');
  button.classList.add('btn-main');
  elements.classList.add('elements1');
  button.innerText = 'See Project';

  elements.innerHTML += `
  <div class="sideSection">
      <h2 class="head-one">${projects.title1}</h2>
      <ul class="highlights">
          <li class="canop">Microverse</li>
          <li> <img class="counter" src="./img/Counter.png" alt="counter">  </li>
          <li>Web Development</li>
          <li> <img class="counter" src="./img/Counter.png" alt="counter"> </li>
          <li>2023</li>
      </ul>
      <p class="doc">${projects.description}</p>
      <ul class="languages">
          <li class="btn">${projects.technologies[0]}</li>
          <li class="btn">${projects.technologies[1]}</li>
          <li class="btn">${projects.technologies[2]}</li>
      </ul>
  </div>
  
  `;
  elements.append(button);
  divImg.classList.add('img-container');
  article.append(divImg, elements);
  section.append(article);

  button.addEventListener('click', () => {
    popup.style.display = 'flex';
    section.style.filter = 'blur(5px)';
    about.style.filter = 'blur(5px)';
    document.body.style.overflow = 'hidden';
    popup.innerHTML = `
  <div class="popup-header">
                  <h2 class="head-one h-pop">${projects.title1}</h2>
                  <div class="cancel-icon"><p><i class="fa-solid fa-x mycancel-icon"></i> <p></div>
              </div>
              <ul class="highlights">
                  <li class="canop">Microverse</li>
                  <li> <img class="counter" src="./img/Counter.png"></li>
                  <li> Web Development</li>
                  <li> <img class="counter" src="./img/Counter.png"></li>
                  <li> 2023</li>
              </ul>
              <img class="carImg pop-img" src="${projects.img2}">
              <div class="popup-content">
                  <div class="left-section">
                      <p class="doc">${projects.description2}</p>
                  </div>
                  <div class="right-section">
                      <ul class="stacks popup">
                          <li class="btn">Html</li>
                          <li class="btn">Css</li>
                          <li class="btn">Javascript</li>
                      </ul>
                      <div class="line-pop"></div>
                      <div class="popup-btns">
                          <a href="${projects.liveDemo}" class="popup-btn btn-main" target="_blank">See live <img src="./img/live.png"></a>
                          <a href="${projects.sourceCode}" class="popup-btn btn-main" target="_blank">See source<img src="./img/github.png"></a>
                      </div>
                  </div>
              </div>
  `;
    const cancel = document.querySelector('.cancel-icon');

    cancel.addEventListener('click', () => {
      popup.style.display = 'none';
      section.style.filter = 'none';
      about.style.filter = 'none';
      document.body.style.overflow = 'initial';
    });
  });
});

// validate con

const form = document.querySelector('#form_contact');

const email = document.querySelector('#email');

const errorMsg = document.querySelector('#errorMsg');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    email.classList.add('active');
    errorMsg.innerText = 'Please enter the e-mail in lowercase';
  }
});

// preserve dat
const userName = document.querySelector('#name');
const userMessage = document.querySelector('#message');

const storage = window.localStorage;

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
          // Firefox
          || e.code === 1014
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
          // acknowledge QuotaExceededError only if there's something already stored
          && (storage && storage.length !== 0);
  }
}

function retrieveData() {
  if (storageAvailable('localStorage')) {
    const userDataString = storage.getItem('formUserData');
    const formUserData = JSON.parse(userDataString);
    return formUserData;
  }
  return false;
}

function fillForm() {
  const formUserData = retrieveData();
  if (formUserData) {
    if (formUserData.name) {
      userName.value = formUserData.name;
    }
    if (formUserData.email) {
      email.value = formUserData.email;
    }
    if (formUserData.message) {
      userMessage.value = formUserData.message;
    }
  }
}
fillForm();

const userData = {};

userMessage.addEventListener('change', () => {
  userData.name = userName.value;
  userData.email = email.value;
  userData.message = userMessage.value;
  storage.setItem('formUserData', JSON.stringify(userData));
});

email.addEventListener('change', () => {
  userData.name = userName.value;
  userData.email = email.value;
  userData.message = userMessage.value;
  storage.setItem('formUserData', JSON.stringify(userData));
});

userName.addEventListener('change', () => {
  userData.name = userName.value;
  userData.email = email.value;
  userData.message = userMessage.value;
  storage.setItem('formUserData', JSON.stringify(userData));
});


// skill section 
langRotate.addEventListener('click', () => {
  langRotate.classList.toggle('right');
  langList.classList.toggle('hide-display');
}
);


frameworks.addEventListener('click', () => {
  frameworks.classList.toggle('show-more');
  frameworkList.classList.toggle('hide-display');
}
);