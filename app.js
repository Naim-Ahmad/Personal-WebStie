// Dom references

const navBar = document.getElementById("nav-bar");
const navPos = navBar.getBoundingClientRect("nav-bar").top;

let navbarLinks = document.querySelectorAll("nav ul li a");

const display = document.querySelectorAll(".display");

const progressBar = document.querySelectorAll(".progress-bar");

window.onscroll = () => {
  progressBar.forEach((prog) => {
    let scrollPos = window.scrollY;
    // console.log(prog.offsetTop);
  });
};

console.log(progressBar);

// windows onload handler

window.onload = () => {
  main();
};

// main function

function main() {
  navBarActive();
  progressAnimation();

  window.addEventListener("scroll", () => {
    navBarActive();
    progressAnimation();
  });
}

function progressAnimation() {
  let scrollPos = window.scrollY;

  progressBar.forEach((prog) => {
    if (scrollPos + 650 > prog.offsetTop) {
      showProgress(prog);
    } else {
      hideProgress(prog);
    }
  });
}

// Utility Function

function showProgress(prog) {
  const value = prog.ariaValueNow;
  prog.style.width = `${value}%`;
  prog.style.opacity = "1";
}

function hideProgress(pro) {
  pro.style.width = `0%`;
  pro.style.opacity = "0";
}

function navBarActive() {
  let scrollPos = window.scrollY;

  if (scrollPos > navPos) {
    navBar.classList.add("bg-dark");
  } else {
    navBar.classList.remove("bg-dark");
  }

  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      scrollPos + 300 > section.offsetTop &&
      scrollPos + 300 < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
