import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsRef = document.querySelector('.gallery');
let instance = null;
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </div>`,
  )
  .join('');
  
  galleryItemsRef.insertAdjacentHTML('afterbegin', galleryMarkup);
  galleryItemsRef.addEventListener('click', onGalleryItems);
 
  function onGalleryItems(evt){
     if (evt.target.tagName !== "IMG") 
          return;
      
       evt.preventDefault();
    
        instance = basicLightbox.create(
           `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}"/>`,

        {onShow: () => {window.addEventListener('keydown', onKeydown)}},
         {onClose: () => {window.removeEventListener('keydown', onKeydown)}} , 
           );
 
  instance.show();
  }
function onKeydown(e) {
    if (e.code === "Escape") {
        instance.close();
    }     
};



