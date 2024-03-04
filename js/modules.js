const toggleButton = document.getElementById('more-button');
const hiddenMenuIcons = document.querySelector('.hidden-menu');
const hiddenIcon = document.querySelector('.hidden-icon');
const hiddenItem = document.querySelector('.modules-list li:nth-child(4)');
const hiddenSeparator = document.querySelector('.hidden-separator');
const hiddenMenuItems = document.querySelectorAll('.modules-list .hidden');
const navbar = document.querySelectorAll('.module-list-container');
const menuLinks = document.querySelectorAll('.menu-links');
const modulesList = document.querySelectorAll('.modules-list li');
const selectedMenuItem = document.querySelector('.modules-list-item-selected');

toggleButton.addEventListener('click',toggleSideMenu);

function toggleSideMenu() {
    hiddenMenuIcons.classList.toggle('visible');
    hiddenItem.style.display = 'none';
    hiddenIcon.style.display = 'none';
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
}

let previousTarget = null;
let selectedSecondIcon = document.querySelector('.selected-icon');
let newSelectedMenuIcon = 'icons/dotBlack.svg';
let firstMenuIconDefault = 'icons/dot.svg';
let menuItemIcons = document.querySelectorAll('.hidden-menu .module-list-icon');
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
