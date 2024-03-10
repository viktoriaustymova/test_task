const toggleButton = document.querySelector('.more-button');
const hiddenMenuIcons = document.querySelector('.hidden-menu');
const firstMenuItem = document.querySelector('.modules-list-item-first');
const secondItem = document.querySelector('.modules-list li:nth-child(2)');
const hiddenIcon = document.querySelector('.hidden-icon');
const hiddenSeparator = document.querySelector('.hidden-separator');
const hiddenMenuItems = document.querySelectorAll('.modules-list .hidden');
const thirdMenuItem = document.querySelector('.modules-list li:nth-child(3)');
const navbar = document.querySelectorAll('.module-list-container');
const menuLocked = document.querySelector('.module-list-container');
const menuLinks = document.querySelectorAll('.menu-links');
const modulesList = document.querySelectorAll('.modules-list li');
const selectedMenuItem = document.querySelector('.modules-list-item-selected');
const hiddenButton = document.querySelector('.unlocked-list li:nth-child(4)');
const hiddenMenuItemsUnlockedList = document.querySelectorAll('.unlocked-list .locked-link');
const showMoreButton = document.querySelector('.show-button');
const menuItemIcons = document.querySelectorAll('.hidden-menu .module-list-icon');
const firstMenuIcon = document.querySelector('.first-icon');
const completedPhases = document.querySelector('.phases-completed');
const lockedPhases = document.querySelector('.phases-locked');
const arrowIcons = document.querySelectorAll('.resource-arrow-icon');
const resourcesBlock = document.querySelector('.resources-container');
const coachBlock = document.querySelector('.coach-block');
const footer = document.querySelector('footer');
const unlockedIcons = document.querySelectorAll('.module-list-icon unlocked');
const navbarUnlocked = document.querySelector('.unlocked-menu');
const hiddenIconLocked = document.querySelector('.hidden-icon-locked');
const hiddenSeparatorLocked = document.querySelector('.hidden-separator-locked');
const hiddenIconsLocked = document.querySelector('.locked-icons');
const navigationsArrow = document.querySelector('.navigationsArrow');
const toggleMobileMenuButton = document.querySelector('.mobile-menu-open');
const hiddenMenuItemsMobile = document.querySelectorAll('.unlocked-list .hidden');
const menuFirstItemUnlocked = document.querySelector('.modules-list-item-first-unlocked');

toggleButton.addEventListener('click',toggleSideMenu);

function toggleSideMenu() {
   hiddenMenuIcons.classList.toggle('visible');
   secondItem.style.display = 'none';
   hiddenIcon.style.display = 'none';
   hiddenButton.style.display = 'none';
   hiddenSeparator.style.display = 'none';
   hiddenMenuItems.forEach(item => item.classList.remove('hidden'));
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
   hiddenMenuItems.forEach(item => item.style.fontStyle = 'italic');
}

let previousTarget = null;
let newFirstMenuIcon = 'icons/dotBlack.svg';
let firstMenuIconDefault = 'icons/dot.svg';
let selectedMenuIcon = 'icons/LockedOrange.svg';
let menuItemIconDefault = 'icons/LockedSmall.svg';

navbar.forEach(item => {
   item.addEventListener('click',toggleItem);
});

function toggleItem(event){
   
   if (previousTarget){
      previousTarget.style.color = 'rgba(0, 0, 0, 1)';
      previousTarget.style.fontWeight = 300;
      previousTarget.style.fontStyle = 'italic';
      firstMenuItem.style.color = 'rgba(0, 0, 0, 1)';
      firstMenuItem.style.fontWeight = 300;
      firstMenuItem.style.fontStyle = 'normal';
      firstMenuIcon.src = newFirstMenuIcon;
      menuFirstItemUnlocked.style.color = 'rgba(0, 0, 0, 1)';
      menuFirstItemUnlocked.style.fontWeight = 300; 
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

   if(event.target === firstMenuItem){
      firstMenuIcon.src = firstMenuIconDefault;
   } 
}

let firstModuleCompleted = false;
let secondModuleProgress = 50;
let thirdModuleProgress = 50;


setTimeout(function(){
   if(secondModuleProgress && thirdModuleProgress){
      firstModuleCompleted = true;
      updateInterface();
   }
}, 7000);  

function updateInterface(){
   
   if(firstModuleCompleted){
      lockedPhases.style.display = 'none';
      completedPhases.style.display = 'block';
      arrowIcons.forEach(icon => icon.src = 'icons/ResourcesArrows.svg');
      resourcesBlock.style.backgroundColor = 'rgba(243, 243, 243, 1)';
      resourcesBlock.style.borderRadius = '5px';
      resourcesBlock.style.padding = '20px';
      coachBlock.style.display = 'block';
      footer.style.display = 'block';
      firstMenuIcon.src = 'icons/Complete.svg';
      thirdMenuItem.content = 'Feedback';
      unlockedIcons.forEach(icon => icon.src = 'icons/dotBlack.svg');
      menuLocked.style.display = 'none';
      navbarUnlocked.style.display = 'grid';
      hiddenButton.style.display = 'block';
      hiddenButton.style.borderBottom = '0px';
      navigationsArrow.href = 'feedback.html';
      menuFirstItemUnlocked.style.color = 'rgba(253, 77, 0, 1)'; 
      menuFirstItemUnlocked.style.fontWeight = 800;
      hiddenMenuItemsUnlockedList.forEach(item => item.style.display = 'none');
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
      if(window.innerWidth < 431){
         hiddenButton.style.display = 'none';
         hiddenMenuItemsUnlockedList.forEach(item => item.style.display = 'block'); 
      }
   }
}


showMoreButton.addEventListener('click', showLockedLinks);

function showLockedLinks(){
   hiddenIconsLocked.classList.toggle('visible');
   hiddenButton.style.display = 'none';
   hiddenIconLocked.style.display = 'none';
   hiddenSeparatorLocked.style.display = 'none';
   hiddenMenuItems.forEach(item => item.classList.remove('hidden'));
   hiddenMenuItemsUnlockedList.forEach(item => item.style.display = 'block'); 
   menuFirstItemUnlocked.style.color = 'rgba(253, 77, 0, 1)'; 
   menuFirstItemUnlocked.style.fontWeight = 800;
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
      hiddenIconsLocked.classList.toggle('visible');
      
   } else {
      sideMenu.style.display = 'block';
      sideMenu.style.height = '100vh';
      mainBlock.style.display = 'none';
      mobileHeader.style.backgroundColor = 'rgba(243, 243, 243, 1)';
      owlLogoMobile.style.display = 'none';
      toggleMenuIcon.src = closeMenuIcon;
      mobileHeader.style.justifyContent = 'right';
      footer.style.display = 'none';
      hiddenMenuIcons.classList.toggle('visible');
      hiddenMenuItems.forEach(item => item.classList.remove('hidden'));
      hiddenIconsLocked.classList.toggle('visible');
   }
   isMenuOpen = !isMenuOpen;
}

