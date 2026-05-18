// Section
const menuItems = document.getElementsByClassName('item-menu');
const home = document.getElementById('home');
const welcome = document.getElementById('welcome')
const services = document.getElementById('services');
const findus = document.getElementById('findUs');
const menuHeight = 40;

window.addEventListener('scroll',()=>{
  
  if (screenY > home.offsetTop - menuHeight){
    setActiveClass(menuItems[0]);
  }

  if(scrollY > welcome.offsetTop - menuHeight){
    setActiveClass(menuItems[1]);
  }

  if(scrollY > services.offsetTop - menuHeight){
    setActiveClass(menuItems[2]);
  }

  if(scrollY > findus.offsetTop - menuHeight){
    setActiveClass(menuItems[3]);
  }
});

const setActiveClass = (item) => {
  document.getElementsByClassName('active')[0].classList.remove('active');
  item.classList.add('active');
}
