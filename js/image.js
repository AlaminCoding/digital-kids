var output = document.getElementById("thumb-img");
var overlay = document.getElementById("thumb-overlay");
var thumbBtn = document.getElementById("thumb-btn");
var loadFile = function (event) {
  output.style.display = "block";
  overlay.style.display = "none";
  thumbBtn.style.display = "block";
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};
var removeImg = () => {
  output.src = null;
  output.style.display = "none";
  overlay.style.display = "flex";
  thumbBtn.style.display = "none";
};
