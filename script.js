const overlay = document.querySelector(".overlay");
const openButton = document.querySelector(".openBtn");
const closeButton = document.querySelector(".closeBtn");

function openNav() {
    overlay.classList.remove("invisible")
    overlay.classList.remove("w-0")
    overlay.classList.add("w-full")
}
  
function closeNav() {
    overlay.classList.add("invisible")
    overlay.classList.add("w-0")
    overlay.classList.remove("w-full")
}

