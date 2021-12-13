const menuIcon = document.querySelector('.mobile-menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');

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
