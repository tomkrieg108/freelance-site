"use-strict"

// Mobile nav
const navBtn = document.getElementById('nav-btn');
const navBtnClose = document.getElementById('nav-btn-close');
const mobileNav = document.getElementById('mobile-nav');
// const logo = document.querySelector('header .logo');
// const logoFooter = document.querySelector('header .logo-footer');

navBtn.addEventListener('click', (e) => {
  mobileNav.classList.remove('hidden');
  navBtnClose.classList.remove('hidden');
  // logoFooter.classList.remove('hidden');
  // logo.classList.add('hidden');
  navBtn.classList.add('hidden');
});

navBtnClose.addEventListener('click', (e) => {
  mobileNav.classList.add('hidden');
  navBtnClose.classList.add('hidden');
  // logoFooter.classList.add('hidden');
  // logo.classList.remove('hidden');
  navBtn.classList.remove('hidden');
});