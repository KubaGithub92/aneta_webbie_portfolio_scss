"use strict";

const btnNav = document.querySelector(".nav__btn");
const nav = document.querySelector(".header__nav");
console.log(btnNav);

btnNav.addEventListener("click", () => {
  nav.classList.add(".header__nav_show");
});
