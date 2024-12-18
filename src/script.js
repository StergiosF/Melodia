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
const eventButtons = document.querySelectorAll(".event-btn");

let currentIndex = 0;
const lastIndex = carouselItems.length - 1;

let intervalId;
function startCarousel() {
  intervalId = setInterval(() => {
    handleNext();
  }, 2800);
}

function stopCarousel() {
  clearInterval(intervalId);
}

startCarousel();

function handleNext() {
  stopCarousel();
  currentIndex++;

  if (currentIndex > lastIndex) {
    currentIndex = 0;
    carouselItems.forEach((item, index) => {
      item.style.opacity = index === 0 ? "1" : "0";
      item.style.zIndex = index === 0 ? "2" : "1";
    });

    eventButtons.forEach((item, index) => {
      item.style.opacity = index === 0 ? "1" : null;
      item.style.border =
        index === 0 ? "3px solid #d6dee0" : "3px solid transparent";
    });
  } else {
    carouselItems[currentIndex - 1].style.opacity = "0";
    carouselItems[currentIndex].style.opacity = "1";

    carouselItems[currentIndex - 1].style.zIndex = "1";
    carouselItems[currentIndex].style.zIndex = "2";

    eventButtons.forEach((item, index) => {
      item.style.opacity = index === currentIndex ? "1" : null;
      item.style.border =
        index === currentIndex ? "3px solid #d6dee0" : "3px solid transparent";
    });
  }
  setTimeout(startCarousel(), 2500);
}

function handleBack() {
  stopCarousel();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = lastIndex;
    carouselItems.forEach((item, index) => {
      item.style.opacity = index === lastIndex ? "1" : "0";
      item.style.zIndex = index === lastIndex ? "2" : "1";

      eventButtons.forEach((item, index) => {
        item.style.opacity = index === lastIndex ? "1" : null;
        item.style.border =
          index === lastIndex ? "3px solid #d6dee0" : "3px solid transparent";
      });
    });
  } else {
    carouselItems[currentIndex + 1].style.opacity = "0";
    carouselItems[currentIndex].style.opacity = "1";

    carouselItems[currentIndex + 1].style.zIndex = "1";
    carouselItems[currentIndex].style.zIndex = "2";

    eventButtons.forEach((item, index) => {
      item.style.opacity = index === currentIndex ? "1" : null;
      item.style.border =
        index === currentIndex ? "3px solid #d6dee0" : "3px solid transparent";
    });
  }
  setTimeout(startCarousel(), 3000);
}

carouselItems.forEach((item, index) => {
  item.style.opacity = index === 0 ? "1" : "0";
  item.style.zIndex = index === 0 ? "2" : "1";
});

eventButtons.forEach((item, index) => {
  item.style.opacity = index === 0 ? "1" : null;
  item.style.border =
    index === 0 ? "3px solid #d6dee0" : "3px solid transparent";
});

prevBtn.addEventListener("click", () => {
  handleBack();
});

nextBtn.addEventListener("click", () => {
  handleNext();
});
