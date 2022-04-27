import { galleryItems } from './gallery-items.js';
// Change code below this line


const instance = basicLightbox.create(`<img src="${modalImgToShow}" width="800" height="600">`,
{        closable: true,
 onShow: (instance) => { window.addEventListener('keydown', onModalPressEsc) },
 onClose: (instance) => {window.removeEventListener('keydown', onModalPressEsc)},
 });

instance.show()  
    


console.log(galleryItems);
