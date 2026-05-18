const body = document.getElementsByTagName('body')[0];
const menu = document.getElementById('menu');
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const itemsMenu = document.getElementsByClassName('item-menu');
const layerMenu = document.getElementById('layer-menu');

Object.keys(itemsMenu).forEach(key => {
  itemsMenu[key].addEventListener('click', () => {
    closeMenu(body, menu);
  });
})

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('show');
  body.style = "overflow:hidden";
  layerMenu.classList.remove('d-none');
});

layerMenu.addEventListener('click', () => {
  closeMenu(body, menu, layerMenu);
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu(body, menu, layerMenu);
});

const closeMenu = (body, menu, layerMenu) => {
  body.style = "overflow:show";
  menu.classList.remove('show');
  layerMenu.classList.add('d-none');
}

