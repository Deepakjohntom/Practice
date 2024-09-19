let togglelogo = document.querySelector(".toggle-logo");
let menu = document.querySelector(".menu");

togglelogo.addEventListener("click", function () {
  menu.classList.toggle("is-active");
});
