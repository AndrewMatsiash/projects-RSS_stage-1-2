const menuBurgerIcon = document.querySelector('.menu__burger')
const navMenu = document.querySelector('.menu')
const logoBurgerMenu = document.querySelector('.logo__burger-menu')
const logoHeader = document.querySelector('.logo__text')
const navMenuItem = document.querySelector('.logo-title')

const toggleClassActive = (elem) => {
  elem.classList.toggle('active')
}

menuBurgerIcon.addEventListener('click', () => {
  toggleClassActive(menuBurgerIcon)
   toggleClassActive(navMenu) 
  logoBurgerMenu.classList.add('active')
  console.log(1);
})

// navMenuItem.addEventListener('click', (event) => {
//   event.target.innerText ='New name'
  
// })
