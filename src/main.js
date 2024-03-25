import { getImage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const inputElement = document.querySelector('.search-input');
export const loaderEl = document.querySelector('.loader');

function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

hideLoader();
form.addEventListener('submit', submitHandle);

function submitHandle(event) {
  event.preventDefault();

  const inputValue = inputElement.value.trim();
  if (inputValue !== '') {
    getImage(inputValue)
      .then(resolve => {
        console.log(resolve);
        renderImages(resolve.hits);
        form.reset();
      })
      .catch(error => {
        console.log(error);
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          theme: 'dark',
          progressBarColor: '#FFFFFF',
          color: '#EF4040',
          position: 'topRight',
        });
        hideLoader();
      });
  } else {
    iziToast.show({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
    hideLoader();
  }
}
