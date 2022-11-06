const navBar = document.getElementById("nav-bar");
const navPos = navBar.getBoundingClientRect("nav-bar").top;

window.addEventListener("scroll", (event) => {
  let scrollPos = this.scrollY;
  if (scrollPos > navPos) {
    navBar.classList.add("nav-bar");
  } else {
    navBar.classList.remove("nav-bar");
  }
});
