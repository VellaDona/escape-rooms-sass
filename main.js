
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const menuList = document.querySelector('.header__menu-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');           
  headerMenu.classList.toggle('active');
  menuList.classList.toggle('active');           
});

