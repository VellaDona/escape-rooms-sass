


// const burger = document.querySelector('.header__burger');

//everything happens as soon as DOM's loaded from HTML 
//for burger-menu to appear at once
document.addEventListener('DOMContentLoaded', () => {

const headerMenu = document.querySelector('.header__menu');
const menuList = document.querySelector('.header__menu-list'); //

//create burger-button
const burgerButton = document.createElement("button");
burgerButton.classList.add('header__burger');
burgerButton.setAttribute('aria-label', 'open menu');

//add burger picture to burgerButton
const burgerIcon = document.createElement('img');
burgerIcon.setAttribute('src','./pics/menu-burger-icon.png');
burgerIcon.setAttribute('alt','open menu');
burgerIcon.style.color = 'white';
burgerIcon.style.backgroundColor = '#011827';
burgerIcon.style.width = '51px';
burgerIcon.style.height = '32px';


burgerButton.append(burgerIcon);
headerMenu.prepend(burgerButton);


burger.addEventListener('click', () => {
  burger.classList.toggle('active');           
  headerMenu.classList.toggle('active');
  menuList.classList.toggle('active');           
});

});

