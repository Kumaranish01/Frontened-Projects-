const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navlist = document.querySelector(".nav-list");
const rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  if (rightNav) {
    // Check if rightNav exists
    rightNav.classList.toggle("v-class-resp");
  }
  if (navlist) {
    // Check if navlist exists
    navlist.classList.toggle("v-class-resp");
  }
  if (navbar) {
    // Check if navbar exists
    navbar.classList.toggle("h-nav-resp");
  }
});
