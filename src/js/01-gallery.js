import { galleryItems } from './gallery-items.js';
// Change code below this line
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

const instance = basicLightbox.create(`<img src="${modalImgToShow}" width="800" height="600">`,
{        closable: true,
 onShow: (instance) => { window.addEventListener('keydown', onModalPressEsc) },
 onClose: (instance) => {window.removeEventListener('keydown', onModalPressEsc)},
 });

instance.show()  
    


console.log(galleryItems);
