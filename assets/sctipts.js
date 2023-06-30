AOS.init({
  duration: 500,
  delay: 100,
});

SmoothScroll({
  animationTime: 800,
  stepSize: 75,
  accelerationDelta: 30,
  accelerationMax: 2,   

  // Поддержка клавиатуры
  keyboardSupport: true,
  arrowScroll: 50,
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,
  touchpadSupport   : true,
});


const navbarElement = document.querySelector('nav.navbar');

window.addEventListener('scroll', () => {
  document.documentElement.scrollTop === 0
    ? navbarElement.classList.remove('navbar-scroll')
    : navbarElement.classList.add('navbar-scroll');
});

if (window.screen.width <= 767.99) {
  const navbarNavDropdownElement = navbarElement.querySelector('#navbarNavDropdown');
  const navbarLinkElements = navbarElement.querySelectorAll('.nav-link');
  const navbarTogglerlement = navbarElement.querySelector('.navbar-toggler');

  navbarLinkElements.forEach(item => item.addEventListener('click', () => navbarTogglerlement.click()));

  navbarNavDropdownElement.addEventListener('show.bs.collapse',() => 
    navbarElement.classList.add('navbar-show'));
  navbarNavDropdownElement.addEventListener('hidden.bs.collapse', () => 
    setTimeout(() => navbarElement.classList.remove('navbar-hidden'), '1000'));
  navbarNavDropdownElement.addEventListener('hide.bs.collapse', () => {
    navbarElement.classList.remove('navbar-show');
    navbarElement.classList.add('navbar-hidden');
  });
}


const guestLinkElement = document.querySelector('.link-collapse-active');
const guestInputElement = document.querySelector('#fio2');
if (guestLinkElement !== null) {
  guestLinkElement.addEventListener('click', () => {
    guestInputElement.value = '';
  })
}

const formElement = document.querySelector('#guestsForm');
formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formElement = document.querySelector('input[name="confirm"]:checked');
  new bootstrap.Modal(`#${formElement.value}`).show();
});