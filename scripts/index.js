const menuIcon = document.querySelector('.mobile-menu-icon-svg');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');
const contact = document.querySelector('.contact-link');
const about = document.querySelector('.about-link');
const heroSection = document.querySelector('.portfolio-link');

function displayMenu() {
  mobileNav.classList.add('show');
  mobileNav.classList.remove('hide');
}
function closeMenu() {
  mobileNav.classList.remove('show');
  mobileNav.classList.add('hide');
}

menuIcon.addEventListener('click', displayMenu, false);
closeBtn.addEventListener('click', closeMenu, false);
contact.addEventListener('click', closeMenu, false);
about.addEventListener('click', closeMenu, false);
heroSection.addEventListener('click', closeMenu, false);
