const button = document.querySelector(".btn-burger")
menu = document.querySelector("#menu")
button.addEventListener("click", function(e){
   menu.classList.toggle("active")
   document.body.classList.toggle("opacity")
})