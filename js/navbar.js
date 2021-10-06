var myMenu = document.querySelector(".my-menu");
var toggleBtn = document.querySelector(".toggle-btn");

var menuOpen = false;

toggleBtn.addEventListener("click", function () {
  if (menuOpen === false) {
    myMenu.style.right = "0%";
    barOpenAnime();
    menuOpen = true;
  } else {
    myMenu.style.right = "-100%";
    barCloseAnime();
    menuOpen = false;
  }
});

var bar = document.querySelectorAll(".bar");

const barOpenAnime = () => {
  bar[0].style.top = "15px";
  bar[1].style.opacity = "0";
  bar[2].style.bottom = "15px";
  setTimeout(() => {
    bar[0].style.transform = "rotate(45deg)";
    bar[2].style.transform = "rotate(-45deg)";
  }, 500);
  toggleBtn.style.transform = "rotate(180deg)";
};
const barCloseAnime = () => {
  bar[0].style.transform = "rotate(0)";
  bar[2].style.transform = "rotate(0)";
  setTimeout(() => {
    bar[0].style.top = "0";
    bar[1].style.opacity = "1";
    bar[2].style.bottom = "0";
  }, 500);
  toggleBtn.style.transform = "rotate(0deg)";
};

const mainNav = document.getElementById("main-nav");
const myNav = document.querySelector(".my-nav");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20) {
    mainNav.style.backgroundColor = "white";
    mainNav.style.borderBottom = "1px solid #005BB5";
    myNav.classList.add("my-nav-scroll");
    myNav.classList.add("my-nav-color");
    logo.innerHTML = `<img src="./img/logo.png" alt="" />`;
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.backgroundColor = "#005bb5";
    }
  } else {
    mainNav.style.backgroundColor = "transparent";
    mainNav.style.borderBottom = "none";
    myNav.classList.remove("my-nav-scroll");
    myNav.classList.remove("my-nav-color");
    logo.innerHTML = `<img src="./img/logo-white.png" alt="" />`;
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.backgroundColor = "white";
    }
  }
});
