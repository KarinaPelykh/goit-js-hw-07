import { galleryItems } from './gallery-items.js'; 
console.log(galleryItems);
const listGallery = document.querySelector(".gallery");

const bigPictureGallery = (event) => {
  event.preventDefault();
 
  if (event.target.nodeName !== 'IMG') {
    return
  } 
const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="1280" />`)
  instance.show()  
}; 
listGallery.addEventListener("click", bigPictureGallery);

const galleryFoto = galleryItems.map(({ preview, original, description }) => {
  
 return `<li class = "gallery__item"><a  class = "gallery__link" href ="${original}">
        <img class ="gallery__image" src = "${preview}" 
    data-source = "${original}"
    alt = "${description}"
    width = "340" >
    </a ></li >`; 

}); console.log(galleryFoto);
listGallery.insertAdjacentHTML("beforeend", galleryFoto.join(''))








