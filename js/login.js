const logBtn = document.querySelector(".log-btn");
const kidLogBtn = document.querySelector(".kid-log-btn");
const defaultLogin = document.querySelector(".default-login");
const kidsLogin = document.querySelector(".kids-login");

logBtn.addEventListener("click", function () {
  if (!logBtn.classList.contains("btn-hover")) {
    logBtn.classList.add("btn-hover");
    kidLogBtn.classList.remove("btn-hover");
    defaultLogin.style.display = "block";
    kidsLogin.style.display = "none";
  }
});
kidLogBtn.addEventListener("click", function () {
  if (!kidLogBtn.classList.contains("btn-hover")) {
    kidLogBtn.classList.add("btn-hover");
    logBtn.classList.remove("btn-hover");
    kidsLogin.style.display = "block";
    defaultLogin.style.display = "none";
  }
});
