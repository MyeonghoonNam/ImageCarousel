(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const imageInput = document.querySelector("#image-upload-input");
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");

  const createImageEl = (url) => {
    const list = document.createElement("li");
    const img = document.createElement("img");

    list.classList.add("carousel-item");
    img.src = url;
    list.appendChild(img);

    const images = document.querySelectorAll(".carousel-item");
    images.forEach((image) => {
      image.classList.remove("now");
    });

    list.classList.add("now");
    return list;
  };

  const uploadImage = (e) => {
    const images = document.querySelectorAll(".carousel-item");
    const value = e.target;

    if (value.files) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target.result;
        carouselUl.insertBefore(createImageEl(imageUrl), images[0]);
      };

      reader.readAsDataURL(value.files[0]);
    }
  };

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

  imageInput.addEventListener("change", uploadImage);
  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);
})();
