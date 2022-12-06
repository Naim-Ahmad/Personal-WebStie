const navBar = document.getElementById("nav-bar");
const navPos = navBar.getBoundingClientRect("nav-bar").top;

let navbarLinks = document.querySelectorAll("nav ul li a");

window.onload = () => {
  main();
};

function main() {
  window.addEventListener("scroll", (event) => {
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
      navBar.classList.add("bg-dark");
    } else {
      navBar.classList.remove("bg-dark");
    }

    navbarLinks.forEach((link) => {
      let section = document.querySelector(link.hash);
      if (
        scrollPos + 150 > section.offsetTop &&
        scrollPos + 150 < section.offsetTop + section.offsetHeight
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
}
