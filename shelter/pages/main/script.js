const body = document.querySelector(".body");
const wrapper = document.querySelector(".wrapper");
const menuBurgerIcon = document.querySelector(".menu__burger");
const navMenu = document.querySelector(".menu");
const logoBurgerMenu = document.querySelector(".logo__burger-menu");
const navMenulist = document.querySelector(".menu__list");
const navMenulink = document.querySelectorAll(".menu__link");
const classActive = "active";
const classLoked = "loked";
const classShadow = "shadow";
const classDisabledLink = "disabled-link";

const toggleClass = (elem, className) => {
  elem.classList.toggle(className);
};

const addTheСlass = (elem, className) => {
  elem.classList.add(className);
};

const removeClass = (elem, className) => {
  elem.classList.remove(className);
};

navMenulink[2].classList.add("disabled-link");
navMenulink[3].classList.add("disabled-link");

menuBurgerIcon.addEventListener("click", () => {
  toggleClass(menuBurgerIcon, classActive);
  toggleClass(navMenu, classActive);
  addTheСlass(logoBurgerMenu, classActive);
  toggleClass(wrapper, classShadow);
  toggleClass(body, classLoked);
});

navMenulist.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu__link")) {
    removeClass(body, classLoked);
    removeClass(menuBurgerIcon, classActive);
    removeClass(navMenu, classActive);
    removeClass(wrapper, classShadow);
  }
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("header")) {
    removeClass(body, classLoked);
    removeClass(menuBurgerIcon, classActive);
    removeClass(navMenu, classActive);
    removeClass(wrapper, classShadow);
  }
});
