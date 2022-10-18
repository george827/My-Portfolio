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