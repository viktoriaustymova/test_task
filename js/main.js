const toggleButton = document.getElementById('more-button');
const hiddenMenuIcons = document.querySelector('.hidden-menu');
const firstMenuItem = document.querySelector('.modules-list-item-first');
const secondItem = document.querySelector('.modules-list li:nth-child(2)');
const hiddenIcon = document.querySelector('.hidden-icon');
const hiddenSeparator = document.querySelector('.hidden-separator');
const hiddenMenuItems = document.querySelectorAll('.modules-list .hidden');
const thirdMenuItem = document.querySelector('.modules-list li:nth-child(3)');
const navbar = document.querySelectorAll('.modules-list');



toggleButton.addEventListener('click',toggleSideMenu);

function toggleSideMenu() {
   hiddenMenuIcons.classList.toggle('visible');
   secondItem.style.display = 'none';
   hiddenIcon.style.display = 'none';
   hiddenSeparator.style.display = 'none';
   thirdMenuItem.style.borderTop = '1px solid rgba(176, 176, 176, 1)';
   hiddenMenuItems.forEach(item => item.classList.remove('hidden'));
   hiddenMenuItems.forEach(item => {
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
let firstMenuIcon = document.querySelector('.first-icon');
let newFirstMenuIcon = 'icons/dotBlack.svg';
let firstMenuIconDefault = 'icons/dot.svg';
let menuItemIcons = document.querySelectorAll('.hidden-menu .module-list-icon')
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
      firstMenuItem.style.color = 'rgba(0, 0, 0, 1)';
      firstMenuItem.style.fontWeight = 300;
      firstMenuItem.style.fontStyle = 'normal';
      firstMenuIcon.src = newFirstMenuIcon;
      menuItemIcons.forEach(icon => {
         icon.src = menuItemIconDefault;
      })
   }
   event.target.style.fontStyle = 'normal';
   event.target.style.color = 'rgba(253, 77, 0, 1)'; 
   event.target.style.fontWeight = 800;
   menuItemIcons.forEach(icon => {
      icon.src = selectedMenuIcon;
   })
   
   previousTarget = event.target;

   if(event.target === firstMenuItem){
      firstMenuIcon.src = firstMenuIconDefault;
   }
}




