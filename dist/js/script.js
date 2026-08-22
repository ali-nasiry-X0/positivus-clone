("use strict");
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
// carousel
const carousel = document.querySelector(".testimonial");
const viewport = carousel.querySelector(".testimonial__viewport");
const track = carousel.querySelector(".testimonial__track");
const slides = [...carousel.querySelectorAll(".testimonial__slide")];
const prevButton = carousel.querySelector(".testimonial__arrow--prev");
const nextButton = carousel.querySelector(".testimonial__arrow--next");
const dots = [...carousel.querySelectorAll(".testimonial__dot")];
let currentIndex = 0;
function getSlideStep() {
  if (!slides.length) {
    return 0;
  }
  const slideWidth = slides[0].getBoundingClientRect().width;
  const styles = window.getComputedStyle(track);
  const gap = parseFloat(styles.columnGap);
  return slideWidth + gap;
}
function updateCarousel() {
  const viewportWidth = viewport.getBoundingClientRect().width;
  const slideWidth = slides[0].getBoundingClientRect().width;
  const step = getSlideStep();
  const centerOffset = (viewportWidth - slideWidth) / 2;
  const translateX = centerOffset - currentIndex * step;
  track.style.transform = `translateX(${translateX}px)`;
  updateControls();
}
function updateControls() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;
  dots.forEach((dot, index) => {
    const isActive = index === currentIndex;

    dot.classList.toggle("is-active", isActive);

    dot.setAttribute("aria-selected", isActive);
  });
}
function goToSlide(index) {
  const maxIndex = slides.length - 1;
  currentIndex = Math.max(0, Math.min(index, maxIndex));
  updateCarousel();
}
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    goToSlide(currentIndex + 1);
  }
}
function previousSlide() {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  }
}
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});
carousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextSlide();
  }

  if (event.key === "ArrowLeft") {
    previousSlide();
  }
});
window.addEventListener("resize", updateCarousel);
updateCarousel();
