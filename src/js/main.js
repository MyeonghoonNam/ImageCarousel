(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");

  const moveNext = () => {
    const images = document.querySelectorAll(".carousel-item");

    if (images.length > 1) {
      const current_image = document.querySelector(".now");
      const next_image = current_image.nextElementSibling;

      carouselUl.appendChild(current_image);
      current_image.classList.remove("now");
      next_image.classList.add("now");
    }
  };

  const movePrev = () => {
    const images = document.querySelectorAll(".carousel-item");

    if (images.length > 1) {
      const current_image = document.querySelector(".now");
      const last_image = carouselUl.lastElementChild;

      carouselUl.insertBefore(last_image, images[0]);
      current_image.classList.remove("now");
      last_image.classList.add("now");
    }
  };

  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);
})();
