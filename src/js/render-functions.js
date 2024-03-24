import { lightbox } from '../main';
import { loaderEl } from '../main';
import { hideLoader } from '../main';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const galleryElement = document.querySelector('.gallery');

export function renderImages(images) {
  galleryElement.innerHTML = '';
  if (images.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
    hideLoader();
  } else {
    images.forEach(image => {
      const cardEl = `
      <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img">
          <ul class="gallery-descript">
    <li class="gallery-descript__item"><p><span class="gallery-descript__span">Likes</span>${image.likes}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Views</span>${image.views}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Comments</span>${image.comments}</p></li>
  <li class="gallery-descript__item"><p><span class="gallery-descript__span">Downloads</span>${image.downloads}</p></li>
        </ul>
        </a>
      </li>
    `;
      galleryElement.insertAdjacentHTML('beforeend', cardEl);
    });
    lightbox.refresh();
  }
}
