(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const nextButton = document.querySelector(".next-btn");

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

  nextButton.addEventListener("click", moveNext);
})();
