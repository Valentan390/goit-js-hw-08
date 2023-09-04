import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(SimpleLightbox);

const galleryContainer = document.querySelector('.gallery');

const makeGalleryCard = pictureInfo => {
  const { preview, original, description } = pictureInfo;

  return `
   <li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
       />
     </a>
   </li
  `;
};


const galleryCardsTemplates = galleryItems.map(pictureInfo => makeGalleryCard(pictureInfo));

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsTemplates.join(''));



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionDelay: 250
});