import iconErr from '../img/bi_x-octagon.svg';
import iconBell from '../img/bi_bell.svg';
import iconSuc from '../img/bi_check2-circle.svg';
import iconCau from '../img/bi_exclamation-triangle.svg';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('[name=delay]');
const inputState = document.querySelector('[name=state]');
const fieldset = document.querySelector('fieldset');
const button = document.querySelector('button');
const labelDelay = document.querySelector('.lable-delay');
const labelState = document.querySelector('.lable-state');

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.info({
  title: 'Hallo!',
  message: 'Wellcome!',
  position: 'topRight',
  backgroundColor: '#09f',
  messageColor: `#fff`,
  titleColor: `#fff`,
  iconUrl: `${iconBell}`,
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(inputDelay.value, 10);
  if (isNaN(delay)) {
    iziToast.error({
      title: 'Caution',
      message: 'You forgot important data',
      position: 'topRight',
      messageColor: `#fff`,
      backgroundColor: `#ffa000`,
      titleColor: `#fff`,
      iconUrl: `${iconCau}`,
    });
    return;
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        fieldset.querySelector('input[type="radio"]:checked').value ===
        'fulfilled'
      ) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(result => {
      iziToast.success({
        title: 'OK',
        message: result,
        position: 'topRight',
        backgroundColor: '#59a10d',
        messageColor: `#fff`,
        titleColor: `#fff`,
        iconUrl: `${iconSuc}`,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
        backgroundColor: `#ef0004`,
        messageColor: `#fff`,
        titleColor: `#fff`,
        iconColor: `#fff`,
        iconUrl: `${iconErr}`,
      });
    })
    .finally(() => {
      inputDelay.value = '';
      document.querySelector('input[value="fulfilled"]').checked = false;
      document.querySelector('input[value="rejected"]').checked = false;
    });
});
