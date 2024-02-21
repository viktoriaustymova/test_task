const toggleButton = document.getElementById('more-button');
const hiddenMenu = document.querySelector('.hidden-menu');
const secondItem = document.querySelector('.modules-list li:nth-child(2)');
const hiddenIcon = document.querySelector('.hidden-icon');
const hiddenSeparator = document.querySelector('.hidden-separator');
const hiddenItems = document.querySelectorAll('.modules-list .hidden');
const thirdMenuItem = document.querySelector('.modules-list li:nth-child(3)');

toggleButton.addEventListener('click',toggleSideMenu);

function toggleSideMenu() {
   hiddenMenu.classList.toggle('visible');
   secondItem.style.display = 'none';
   hiddenIcon.style.display = 'none';
   hiddenSeparator.style.display = 'none';
   thirdMenuItem.style.borderTop = '1px solid rgba(176, 176, 176, 1)';
   hiddenItems.forEach(item => item.classList.remove('hidden'));
}