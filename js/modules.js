const toggleButton = document.querySelector('.more-button');
const hiddenMenuIcons = document.querySelector('.hidden-menu');
const hiddenIcon = document.querySelector('.hidden-icon');
const hiddenItem = document.querySelector('.modules-list li:nth-child(4)');
const hiddenSeparator = document.querySelector('.hidden-separator');
const hiddenMenuItems = document.querySelectorAll('.modules-list .hidden');
const navbar = document.querySelectorAll('.module-list-container');
const menuLinks = document.querySelectorAll('.menu-links');
const modulesList = document.querySelectorAll('.modules-list li');
const selectedMenuItem = document.querySelector('.modules-list-item-selected');
const selectedSecondIcon = document.querySelector('.selected-icon');
const menuItemIcons = document.querySelectorAll('.hidden-menu .module-list-icon');
const footer = document.querySelector('footer');
const toggleMobileMenuButton = document.querySelector('.mobile-menu-open');
const hiddenMenuItemsMobile = document.querySelectorAll('.unlocked-list .hidden');
const menuFirstItemUnlocked = document.querySelector('.modules-list-item-first-unlocked');
const hiddenIconsLocked = document.querySelector('.locked-icons');

toggleButton.addEventListener('click',toggleSideMenu);

modulesList.forEach(item => {
   item.onmouseover = () => {
      item.style.backgroundColor = 'rgba(243, 243, 243, 1)';
      item.style.borderRadius = '3px';
      item.style.border = '0px';
   };

   item.onmouseout = () => {
      item.style.backgroundColor = '';
      item.style.borderRadius = '';
      item.style.border = '';
   };
});

function toggleSideMenu() {
    hiddenMenuIcons.classList.toggle('visible');
    hiddenItem.style.display = 'none';
    hiddenIcon.style.display = 'none';
    hiddenSeparator.style.display = 'none';
    hiddenMenuItems.forEach(item => item.classList.remove('hidden')); 
}

let previousTarget = null;
let newSelectedMenuIcon = 'icons/dotBlack.svg';
let firstMenuIconDefault = 'icons/dot.svg';
let selectedMenuIcon = 'icons/LockedOrange.svg';
let menuItemIconDefault = 'icons/LockedSmall.svg';

navbar.forEach(item => {
   item.addEventListener('click',toggleItem);
})

function toggleItem(event){
   
   if (previousTarget){
      previousTarget.style.color = 'rgba(0, 0, 0, 1)';
      previousTarget.style.fontWeight = 300;
      previousTarget.style.fontStyle = 'italic';
      selectedMenuItem.style.color = 'rgba(0, 0, 0, 1)';
      selectedMenuItem.style.fontWeight = 300;
      selectedMenuItem.style.fontStyle = 'normal';
      selectedSecondIcon.src = newSelectedMenuIcon;
   }
   
   event.target.style.fontStyle = 'normal';
   event.target.style.color = 'rgba(253, 77, 0, 1)'; 
   event.target.style.fontWeight = 800;
   menuItemIcons.forEach((icon,index) => {
      if(menuLinks[index] === event.target){
         icon.src = selectedMenuIcon;
      } else {
         icon.src = menuItemIconDefault;
      }
   })
  
   previousTarget = event.target;

   if(event.target === selectedMenuItem){
      selectedSecondIcon.src = firstMenuIconDefault;
   }
}


let isMenuOpen = false;
const sideMenu = document.querySelector('.sidebar');
const mainBlock = document.querySelector('.main');
const mobileHeader = document.querySelector('.mobile-header');
const owlLogoMobile = document.querySelector('.owl-logo-mobile');
const toggleMenuIcon = document.querySelector('.toggle-mobile-menu');
let closeMenuIcon = 'icons/Close.svg';
let openMenuIcon = 'icons/Mobile Menu.svg';

toggleMobileMenuButton.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
   if(isMenuOpen){
      sideMenu.style.display = 'none';
      sideMenu.style.height = '0';
      mainBlock.style.display = 'block';
      owlLogoMobile.style.display = 'block';
      mobileHeader.style.backgroundColor = 'white';
      toggleMenuIcon.src = openMenuIcon;
      mobileHeader.style.justifyContent = 'space-between';
      footer.style.display = 'block';
      hiddenMenuIcons.classList.toggle('visible');
      
   } else {
      sideMenu.style.display = 'block';
      sideMenu.style.height = '100vh';
      mainBlock.style.display = 'none';
      mobileHeader.style.backgroundColor = 'rgba(243, 243, 243, 1)';
      owlLogoMobile.style.display = 'none';
      toggleMenuIcon.src = closeMenuIcon;
      mobileHeader.style.justifyContent = 'right';
      footer.style.display = 'none';
      hiddenMenuItems.forEach(item => item.classList.remove('hidden'));
      hiddenMenuIcons.classList.toggle('visible');
   }
   isMenuOpen = !isMenuOpen;
}