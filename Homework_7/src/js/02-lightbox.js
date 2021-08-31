import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const createGallery = (galleryItems) => {
  for (const items of galleryItems){

    const galleryItem = document.createElement("a");
    galleryItem.classList.add("gallery__item");
    galleryItem.href = items.original;
    gallery.append(galleryItem);

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = items.preview;
    galleryImage.alt = items.description;
    galleryItem.append(galleryImage);
  }
};


gallery.addEventListener("click", clickImage);
gallery.addEventListener("click", selectImage);

function clickImage(event) {
  event.preventDefault();
}

function selectImage(event) {
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
  });
}

createGallery(galleryItems);