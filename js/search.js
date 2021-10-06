const input = document.getElementById("search-input");
const list = document.querySelector(".search-list");

function inputRead(e) {
  if (e.key === ",") {
    if (input.value.length >= 3) {
      let value = input.value.slice(0, input.value.length - 1);
      let li = document.createElement("li");
      li.innerHTML = `${value} <i class="bi bi-x-lg" onclick="deleteList(this)"></i>`;
      list.appendChild(li);
      input.value = "";
      console.log(input.value.slice(0, input.value.length - 1));
    }
  }
}

function deleteList(node) {
  list.removeChild(node.parentNode);
}
