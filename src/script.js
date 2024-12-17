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
  } else {
    carouselItems[currentIndex - 1].style.opacity = "0";
    carouselItems[currentIndex].style.opacity = "1";

    carouselItems[currentIndex - 1].style.zIndex = "1";
    carouselItems[currentIndex].style.zIndex = "2";
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
    });
  } else {
    carouselItems[currentIndex + 1].style.opacity = "0";
    carouselItems[currentIndex].style.opacity = "1";

    carouselItems[currentIndex + 1].style.zIndex = "1";
    carouselItems[currentIndex].style.zIndex = "2";
  }
  setTimeout(startCarousel(), 2800);
}

carouselItems.forEach((item, index) => {
  item.style.opacity = index === 0 ? "1" : "0";
  item.style.zIndex = index === 0 ? "2" : "1";
});

prevBtn.addEventListener("click", () => {
  handleBack();
});

nextBtn.addEventListener("click", () => {
  handleNext();
});
