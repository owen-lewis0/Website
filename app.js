const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const contactBtn = document.querySelector('#signup');

  const servicesSection = document.querySelector('#services');
  const contactSection = document.querySelector('#sign-up');

  let scrollPos = window.scrollY;

  // Get the top positions of each section
  const servicesTop = servicesSection ? servicesSection.offsetTop - 100 : 600;
  const contactTop = contactSection ? contactSection.offsetTop - 100 : 2345;

  if (window.innerWidth > 960) {
    // Remove all highlights first
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    contactBtn.classList.remove('highlight');

    if (scrollPos < servicesTop) {
      homeMenu.classList.add('highlight');
    } else if (scrollPos < contactTop) {
      aboutMenu.classList.add('highlight');
    } else {
      contactBtn.classList.add('highlight');
    }
  } else {
    // Remove highlights on mobile
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    contactBtn.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
