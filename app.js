const navBar = document.getElementById("nav-bar");
const navPos = navBar.getBoundingClientRect("nav-bar").top;

let navbarLinks = document.querySelectorAll("nav ul li a");

const htmlSec = document.querySelector(".html");

const progressBars = document.querySelectorAll(".progress-bar");

const display = document.querySelectorAll(".display");

window.onload = () => {
  main();
};

function main() {
  window.addEventListener("scroll", () => {
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

    const sectionPos = htmlSec.getBoundingClientRect().top;

    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
      showProgress();
    } else {
      hideProgress();
    }
  });

  window.addEventListener("scroll", () => {});
}

let interval = 500;

function showProgress() {
  let startValue = 0;
  let value;
  let duration = Math.floor(interval / value);
  progressBars.forEach((progressBar) => {
    value = progressBar.ariaValueNow;
    progressBar.style.width = `${value}%`;
    progressBar.style.opacity = "1";
  });

  let counter = setInterval(function () {
    startValue += 1;
    display.forEach((d) => {
      d.textContent = `${startValue}%`;
    });

    if (startValue == value) {
      clearInterval(counter);
    }
  }, duration);
}

function hideProgress() {
  let startValue = 0;
  let value;
  let duration = Math.floor(interval / value);
  progressBars.forEach((progressBar) => {
    value = progressBar.ariaValueNow;
    progressBar.style.width = `0%`;
    progressBar.style.opacity = "0";
  });

  let counter = setInterval(function () {
    value -= 1;
    display.forEach((d) => {
      d.textContent = `${value}%`;
    });
    if (startValue == value) {
      clearInterval(counter);
    }
  }, duration);
}
