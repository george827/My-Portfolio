const humburger = document.querySelector('.my-menu');
const navMenu = document.querySelector('.my-menu-nav');
const nav = document.querySelector('.nav');

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

const project = [{
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  description2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  img1: './img/Snapshoot-Portfolio_desk.png',
  img2: './img/Snapshoot-Portfolio_desk.png',
  technologies: ['Html', 'Css', 'Javascript'],
  liveDemo: 'https://george827.github.io/My-Portfolio/',
  sourceCode: 'https://github.com/george827/My-Portfolio',
  title1: 'Tonic',
  title2: 'Tonic',
},
{
  description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  description2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  img1: './img/Snapshoot Portfolio4.png',
  img2: './img/Snapshoot Portfolio4.png',
  technologies: ['Html', 'Css', 'Javascript'],
  liveDemo: 'https://george827.github.io/My-Portfolio/',
  sourceCode: 'https://github.com/george827/My-Portfolio',
  title1: 'Multi-Post Stories',
  title2: 'Multi-Post Stories',
},
{
  description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  description2: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  img1: './img/Snapshoot-Portfolio-DESK3.png',
  img2: './img/Snapshoot-Portfolio-DESK3.png',
  technologies: ['Html', 'Css', 'Javascript'],
  liveDemo: 'https://george827.github.io/My-Portfolio/',
  sourceCode: 'https://github.com/george827/My-Portfolio',
  title1: 'Facebook 360',
  title2: 'Facebook 360',
},
{
  description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  description2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  img1: './img/Snapshoot-Portfolio-DESK4.png',
  img2: './img/Snapshoot-Portfolio-DESK4.png',
  technologies: ['Html', 'Css', 'Javascript'],
  liveDemo: 'https://george827.github.io/My-Portfolio/',
  sourceCode: 'https://github.com/george827/My-Portfolio',
  title1: 'Uber Navigation',
  title2: 'Uber Navigation',
},
];

const section = document.querySelector('.works_section');
const popup = document.querySelector('.popup-window');

project.forEach((projects) => {
  const article = document.createElement('article');
  const divImg = document.createElement('div');
  const img = document.createElement('img');
  const elements = document.createElement('div');
  const button = document.createElement('button');
  img.src = `${projects.img1}`;
  article.classList.add('card1');
  button.classList.add('btn-main');
  elements.classList.add('elements1');
  button.innerText = 'See Project';
  img.classList.add('carImg');

  elements.innerHTML += `
  <div class="sideSection">
      <h2 class="head-one">${projects.title1}</h2>
      <ul class="highlights">
          <li class="canop">CANOPY</li>
          <li> <img class="counter" src="./img/Counter.png" alt="counter">  </li>
          <li>Back End Dev</li>
          <li> <img class="counter" src="./img/Counter.png" alt="counter"> </li>
          <li>2015</li>
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
  divImg.append(img);
  article.append(divImg, elements);
  section.append(article);

  button.addEventListener('click', () => {
    popup.style.display = 'flex';
    section.style.filter = 'blur(5px)';
    document.body.style.overflow = 'hidden';
    popup.innerHTML = `
  <div class="popup-header">
                  <h2 class="head-one h-pop">${projects.title1}</h2>
                  <div class="cancel-icon"><img src="./img/cancel-icon.png"></div>
              </div>
              <ul class="highlights">
                  <li class="canop">CANOPY</li>
                  <li> <img class="counter" src="./img/Counter.png"></li>
                  <li> Back End Dev</li>
                  <li> <img class="counter" src="./img/Counter.png"></li>
                  <li> 2015</li>
              </ul>
              <img src="${projects.img2}">
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
      document.body.style.overflow = 'initial';
    });
  });
});

// validate contanct

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

// preserve data
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
  }
  catch (e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
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



