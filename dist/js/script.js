const btn_menu = document.querySelector(".navbar__toggle");
const popup_menu = document.querySelector(".menu-popup");
const btn_process = document.querySelectorAll(".process__toggle");
btn_menu.addEventListener("click", () => {
  btn_menu.classList.toggle("active");
  popup_menu.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
});
btn_process.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".process__card");

    btn.classList.toggle("active");
    const process_container = btn.closest(".container");
    const cards = process_container.querySelectorAll(".process__card");
    cards.forEach((card) => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      }
    });

    if (card) {
      card.classList.toggle("active");
    }
  });
});
