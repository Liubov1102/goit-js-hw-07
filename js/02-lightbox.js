import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"  alt="${description}" title="${description}"/> </a> `,
  )
  .join('');
  
  galleryItemsRef.insertAdjacentHTML('afterbegin', galleryMarkup);
  const lightbox = new SimpleLightbox('.gallery a', {captionPosition:'bottom',captionDelay:250,enableKeyboard:true});
