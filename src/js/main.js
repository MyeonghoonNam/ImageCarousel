(() => {
  const carouselUl = document.querySelector(".carousel-list");
  const imageInput = document.querySelector("#image-upload-input");
  const nextButton = document.querySelector(".next-btn");
  const prevButton = document.querySelector(".prev-btn");

  const changeTransform = () => {
    const items = document.querySelectorAll(".carousel-item");
    const degree = 360 / items.length;

    items.forEach((el, i) => {
      if (i === 0) {
        el.style.transform = "rotateY(0deg) translateZ(250px)";
      } else {
        el.style.transform = `
          rotateY(${degree * i}deg) translateZ(250px) rotateY(-${degree * i}deg)
        `;
      }

      if (items.length >= 5) {
        if (i === 0) {
          el.style.transform = "rotateY(0deg) translateZ(250px)";
        } else if (i === 1) {
          el.style.transform = `rotateY(72deg) translateZ(250px) rotateY(-72deg)`;
        } else if (i === 2) {
          el.style.transform = `rotateY(144deg) translateZ(250px) rotateY(-144deg) translateX(400px)`;
        } else if (i === items.length - 2) {
          el.style.transform = `rotateY(216deg) translateZ(250px) rotateY(-216deg) translateX(-400px)`;
        } else if (i === items.length - 1) {
          el.style.transform = `rotateY(288deg) translateZ(250px) rotateY(-288deg)`;
        } else {
          el.style.transform = `
          rotateY(${degree * i}deg) translateZ(250px) rotateY(-${degree * i}deg)
          `;
        }
      }
    });
  };

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
        changeTransform();
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
      changeTransform();
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
      changeTransform();
    }
  };

  imageInput.addEventListener("change", uploadImage);
  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);

  window.onload = () => {
    changeTransform();
  };
})();
