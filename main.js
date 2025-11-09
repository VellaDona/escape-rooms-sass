
//find elements for class "active"
const headerMenu = document.querySelector('.header__menu');
const menuList = document.querySelector('.header__menu-list');

//create burger-button
const burger = document.createElement("button");
burger.classList.add('header__burger');
burger.setAttribute('aria-label', 'main menu');
//add burger button to headerMenu
headerMenu.prepend(burger);

//set common properties for both <img> burgerIcon and burgerCloseIcon
function createBurgerImg(src, className) {
  const burgerImg = document.createElement('img');

  burgerImg.src = src;
  burgerImg.className = className;
  burgerImg.style.color = 'white';
  burgerImg.style.backgroundColor = '#011827';
  burgerImg.style.position = 'absolute';
  burgerImg.style.top = '0';
  burgerImg.style.left = '0';
  burgerImg.style.transition = 'opacity 0.2s ease';
  return burgerImg;
}

//create burger icons
const burgerIcon = createBurgerImg('./pics/menu-burger-icon.png', 'burger-icon');
const burgerCloseIcon = createBurgerImg('./pics/menu-cross-close.png', 'close-icon');

//add individual properties to burger icon
burgerIcon.setAttribute('alt', "open menu");
burgerIcon.style.height = '32px';
burgerIcon.style.width = '51px';

//add individual properties to close icon
burgerCloseIcon.setAttribute('alt', "close menu");
burgerCloseIcon.style.height = '37px';
burgerCloseIcon.style.width = '37px';

//add burger img to burger button 
burger.append(burgerIcon, burgerCloseIcon);

//add EventListener to burger
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  menuList.classList.toggle('active');
});


//add all other styles for burger-menu
const burgerAddStyles = document.createElement('style');
burgerAddStyles.textContent = `
  /* styles for <header> changed when burger added  */
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  @media screen and (min-width: 600px) {
    .header {
      display: grid;
      flex-direction: unset;
      justify-content: unset;
      align-items: unset;
    }
  }

  /* burger added  */
  .header__burger {
    display: block;
    position: relative;
    top: 1rem;
    right: 4rem;
  }

  @media screen and (min-width: 600px) {
    .header__burger {
      display: none;
    }
  }

  /* styles for burger img when switched*/
  .header__burger .burger-icon {
    opacity: 1;
  }

  .header__burger .close-icon {
    opacity: 0;
  }

  .header__burger.active .burger-icon {
    opacity: 0;
  }

  .header__burger.active .close-icon {
    opacity: 1;
    height: 37px;
    width: 37px;
  }

  /* styles for menu <nav> with class active */
  .header__menu.active {
    position: fixed;
    inset: 18px 18px;
  }

  .header__menu.active .header__burger {
    position: absolute;
    z-index: 3;
  }

  .header__menu.active::before {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(255, 255, 255, 0.5);
  }

  /* styles for menu <ul> with class active */
  .header__menu-list.active {
   	position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		font-size: 2rem;
		font-weight: 700;
		inset: 20px 19px;
    background-color: #011827;
  }
`;

// add styles to <head>
document.head.append(burgerAddStyles);
