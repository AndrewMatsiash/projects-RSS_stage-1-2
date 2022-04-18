
const body = document.querySelector('.body')
const wrapper = document.querySelector('.wrapper')
const menuBurgerIcon = document.querySelector('.menu__burger')
const navMenu = document.querySelector('.menu')
const logoBurgerMenu = document.querySelector('.logo__burger-menu')
const logoHeader = document.querySelector('.logo__text')
const navMenuItem = document.querySelector('.logo-title')

const toggleClassActive = (elem) => {
  elem.classList.toggle('active')
}

const addedClassActive = (elem) => {
  elem.classList.add('active')
}
const addedClassLoced = (elem) => {
  elem.classList.toggle('_loced')
}

menuBurgerIcon.addEventListener('click', () => {
  toggleClassActive(menuBurgerIcon)
   toggleClassActive(navMenu) 
   toggleClassActive(wrapper) 
   addedClassActive(logoBurgerMenu)
   addedClassLoced(body)
})

// navMenuItem.addEventListener('click', (event) => {
//   event.target.innerText ='New name'
  
// })
