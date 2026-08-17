const btn_menu = document.querySelector(".navbar__toggle");
const popup_menu = document.querySelector(".menu-popup");
const btn_process = document.querySelectorAll(".process__toggle");
// closing and opening nav menu
btn_menu.addEventListener("click", () => {
  btn_menu.classList.toggle("active");
  popup_menu.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
});
btn_process.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Opening and closing each toggled button
    const process_container = btn.closest(".container");
    const cards = process_container.querySelectorAll(".process__card");
    const cards_btn = process_container.querySelectorAll(".process__toggle");
    cards_btn.forEach((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });
    cards.forEach((card) => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      }
    });

    // plus and minus btn on process
    const card = btn.closest(".process__card");
    btn.classList.toggle("active");
    if (card) {
      card.classList.toggle("active");
    }
  });
});
