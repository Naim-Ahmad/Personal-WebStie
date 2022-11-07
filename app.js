const navBar = document.getElementById("nav-bar");
const navPos = navBar.getBoundingClientRect("nav-bar").top;

let navbarLinks = document.querySelectorAll("nav a");

console.log(navbarLinks);

window.addEventListener("scroll", (event) => {
  let scrollPos = this.scrollY;
  if (scrollPos > navPos) {
    navBar.classList.add("nav-bar");
  } else {
    navBar.classList.remove("nav-bar");
  }

  navbarLinks.forEach((link) => {});
});
