import { galleryItems } from './gallery-items.js';

const listGallery = document.querySelector(".gallery");

const galleryFoto = galleryItems.map(({ preview, original, description }) => {
return `  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    
    
});listGallery.insertAdjacentHTML("beforeend", galleryFoto.join(''))

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
});


