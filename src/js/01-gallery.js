// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = galleryItems.map(
    ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    ).join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyle = 'none';

galleryContainer.innerHTML = itemsMarkup;

var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });

console.log(galleryItems);

