const buttonBurger = document.querySelector(".btn-burger")
const menu = document.querySelector(".navbar ul");
buttonBurger.addEventListener("click",() => {
   console.log(menu.classList.toggle("navbar__show-you"))
   // menu.classList.toggle("navbar__show-you")
})


