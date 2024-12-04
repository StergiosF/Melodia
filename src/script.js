document.addEventListener("DOMContentLoaded", () => {
  const titleText = document.querySelector(".title-text");
  const button = document.querySelector(".explore-btn");

  titleText.addEventListener("animationend", (event) => {
    if (event.animationName === "animated-text") {
      button.classList.remove("hidden");
      button.classList.add("visible");
    }
  });
});
