const overlay = document.querySelector(".overlay");
const openButton = document.querySelector(".openBtn");
const closeButton = document.querySelector(".closeBtn");

function openNav() {
    overlay.classList.remove("hidden")
}
  
function closeNav() {
    overlay.classList.add("hidden")
}