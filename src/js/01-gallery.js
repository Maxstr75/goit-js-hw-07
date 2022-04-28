import { galleryItems } from './gallery-items.js';
// Change code below this line
const menu = document.querySelector('.gallery__item');

menu.classList.add('.gallery__link');

const markUp = createGalleryItems(galleryItems);
menu.insertAdjacentHTML('afterbegin', markUp);

function createGalleryItems(galleryItems) {
return galleryItems.reduce((acc, item) => (acc += createMarkup(item)), ' ');
}

function createMarkup({ preview, original, description }) {
const itemList = `<li><img src='${(preview,
original)}' alt='${description}'></li>`;
return itemList;
}

const instance = basicLightbox.create(`<img src="${modalImgToShow}" width="800" height="600">`,
{        closable: true,
 onShow: (instance) => { window.addEventListener('keydown', onModalPressEsc) },
 onClose: (instance) => {window.removeEventListener('keydown', onModalPressEsc)},
 });

 instance.show(() => console.log(galleryItems));
