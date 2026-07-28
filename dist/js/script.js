const btn_menu = document.querySelector(".navbar__toggle");
const popup_menu = document.querySelector(".menu-popup");
btn_menu.addEventListener("click", () => {
  btn_menu.classList.toggle("active");
  popup_menu.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
});
