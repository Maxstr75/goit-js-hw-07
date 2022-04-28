import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
  })
    .join('');
}

function onGalleryContainerClick(evt) {
  
// evt.preventDefault();

  if (!evt.target.classList.contains('')) {
    return; 
  }
  
  console.log(evt.target);
} 



const instance = basicLightbox.create(`<img src="${modalImgToShow}" width="800" height="600">`,
{        closable: true,
 onShow: (instance) => { window.addEventListener('keydown', onModalPressEsc) },
 onClose: (instance) => {window.removeEventListener('keydown', onModalPressEsc)},
 });

instance.show()




    
console.log(galleryItems);
