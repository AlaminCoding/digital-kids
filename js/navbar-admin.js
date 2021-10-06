const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar-right");

let openMenu = false;
toggleBtn.addEventListener("click", function () {
  if (openMenu === false) {
    navbar.style.right = 0;
    toggleBtn.innerHTML = `<i class="bi bi-layout-text-sidebar"></i>`;
    openMenu = true;
    // Close Sidebar Menu
    sidebar.style.left = "-350px";
    openSidebar = false;
  } else {
    navbar.style.right = "-100%";
    toggleBtn.innerHTML = `<i class="bi bi-layout-text-sidebar-reverse"></i>`;
    openMenu = false;
    document.body.style.position = "static";
  }
});

const sideList = document.querySelectorAll(".side-list");
const subMenu = document.querySelectorAll(".sub-menu");
sideList.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (subMenu[index].classList.contains("sub-menu-open")) {
      subMenu[index].classList.remove("sub-menu-open");
      element.children[1].style.transform = "rotate(0deg)";
    } else {
      subMenu[index].classList.add("sub-menu-open");
      element.children[1].style.transform = "rotate(90deg)";
      for (let i = 0; i < subMenu.length; i++) {
        if (i != index) {
          subMenu[i].classList.remove("sub-menu-open");
          sideList[i].children[1].style.transform = "rotate(0deg)";
        }
      }
    }
  });
});

const sidebar = document.querySelector(".sidebar-nav");
const sidebarToggle = document.getElementById("sidebar-toggle");
let openSidebar = false;

sidebarToggle.addEventListener("click", function () {
  if (openSidebar === false) {
    sidebar.style.left = 0;
    openSidebar = true;
    document.body.style.position = "fixed";
    // Close Main Menu
    navbar.style.right = "-100%";
    toggleBtn.innerHTML = `<i class="bi bi-layout-text-sidebar-reverse"></i>`;
    openMenu = false;
  } else {
    sidebar.style.left = "-350px";
    openSidebar = false;
    document.body.style.position = "static";
  }
});

const navWrapper = document.querySelector(".nav-wrapper");
const sidebarNav = document.querySelector(".sidebar-nav");
navWrapper.addEventListener("mouseenter", function () {
  sidebarNav.classList.add("sidebar-nav-expand");
});
navWrapper.addEventListener("mouseleave", function () {
  sidebarNav.classList.remove("sidebar-nav-expand");
});

const sidebarToggleLg = document.getElementById("sidebar-toggle-lg");
let openSidebarLg = false;
sidebarToggleLg.addEventListener("click", function () {
  if (openSidebarLg === false) {
    sidebarNav.classList.add("sidebar-nav-expand-lg");
    navWrapper.classList.add("nav-wrapper-expand");
    openSidebarLg = true;
  } else {
    sidebarNav.classList.remove("sidebar-nav-expand-lg");
    navWrapper.classList.remove("nav-wrapper-expand");
    openSidebarLg = false;
  }
});

// Share Icon Setup
const shareIcon = document.querySelector(".share-icon");
const shareIconList = document.querySelector(".share-icon-list");
let shareListOpen = false;
shareIcon.addEventListener("click", function () {
  if (shareListOpen === false) {
    for (let i = 0; i < shareIconList.children.length; i++) {
      shareIconList.children[i].style.animationName = "share-animation-on";
      shareIconList.children[i].style.animationDelay = `${i / 6}s`;
    }
    setTimeout(() => {
      for (let i = 0; i < shareIconList.children.length; i++) {
        shareIconList.children[i].style.transform = "translateX(0px)";
        shareIconList.children[i].style.animationName = "";
        shareIconList.children[i].style.animationDelay = "";
      }
    }, 1000);
    shareListOpen = true;
  } else {
    for (let i = 0; i < shareIconList.children.length; i++) {
      shareIconList.children[i].style.animationName = "share-animation-off";
      shareIconList.children[i].style.animationDelay = `${i / 6}s`;
    }
    setTimeout(() => {
      for (let i = 0; i < shareIconList.children.length; i++) {
        shareIconList.children[i].style.transform = "translateX(90px)";
        shareIconList.children[i].style.animationName = "";
        shareIconList.children[i].style.animationDelay = "";
      }
    }, 1000);
    shareListOpen = false;
  }
});
