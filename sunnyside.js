const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-main");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-shown");
});
