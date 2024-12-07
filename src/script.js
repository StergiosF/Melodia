// Explore button homepage
document.addEventListener("DOMContentLoaded", () => {
  const titleText = document.querySelector(".title-text");
  const button = document.querySelector(".explore-btn");

  titleText &&
    titleText.addEventListener("animationend", (event) => {
      if (event.animationName === "animated-text") {
        button.classList.remove("hidden");
        button.classList.add("visible");
      }
    });
});

// Carousel
const carouselContainer = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

carouselItems.forEach((item, index) => {
  item.style.opacity = index === 0 ? "1" : "0";
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  carouselItems[currentIndex + 1].style.opacity = "0";
  carouselItems[currentIndex].style.opacity = "1";
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  carouselItems[currentIndex - 1].style.opacity = "0";
  carouselItems[currentIndex].style.opacity = "1";
});
