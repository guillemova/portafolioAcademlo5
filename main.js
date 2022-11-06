const button = document.querySelector(".btn-burger")
const menu = document.querySelector(".navbar")
button.addEventListener("click", function(){
  menu.classList.toggle(".menu__show-you")
})