import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector(".gallery");
const createGallery = (galleryItems) => {
  for (const items of galleryItems) {

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");
    gallery.append(galleryItem);

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = items.original;
    galleryItem.append(galleryLink);

    const galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image");
    galleryImg.src = items.preview;
    galleryImg.dataset.source = items.original;
    galleryImg.alt = items.description;
    galleryLink.append(galleryImg);
  }
};

gallery.addEventListener("click", clickImage)
gallery.addEventListener("click", selectImage);

function clickImage(event) {
  event.preventDefault();
}

function selectImage(event) {
  for (const items of galleryItems) {
    const instance = basicLightbox.create(`<img src=${items.original}>`);

    if (event.target.src === items.preview) {
      instance.show();
    }
  }
}

createGallery(galleryItems);