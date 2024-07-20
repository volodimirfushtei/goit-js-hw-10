import iconErr from '../img/bi_x-octagon.svg';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('[name=delay]');
const inputState = document.querySelector('[name=state]');
const fieldset = document.querySelector('fieldset');
const button = document.querySelector('button');
const labelDelay = document.querySelector('.lable-delay');
const labelState = document.querySelector('.lable-state');
inputDelay.style.cssText = `border: 1px solid #808080;
border-radius: 4px;
width: 360px;
height: 40px;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
color: #2e2f42;`;
labelState.style.cssText = `font-weight: 400;
font-size: 16px;
line-height: 1.5;
color: #2e2f42;`;

fieldset.style.cssText = `border-radius: 4px;
stroke-width: 1px;
stroke: #808080;
width: 360px;
height: 64px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 48px;
padding: 0px;
margin-left: 40px;`;

labelDelay.style.cssText = `display: flex;
    margin-bottom: 16px;
    margin-top: 40px;
    font-size: 16px;
     flex-direction: column;
     margin-left: 40px`;

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.info({
  title: 'Hallo!',
  message: 'Wellcome!',
  position: 'topRight',
  backgroundColor: '#09f',
  messageColor: `#fff`,
  titleColor: `#fff`,
  iconUrl: `../img/bi_bell.svg`,
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
      iconUrl: `${iconErr}`,
    });
    return;
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputState.checked) {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Illegal operation`);
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
        iconUrl: `../img/bi_check2-circle.svg`,
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: `#fff`,
        titleColor: `#fff`,
        iconUrl: `${iconErr}`,
      });
    })
    .finally(() => {
      inputDelay.value = '';
      document.querySelector('input[value="fulfilled"]').checked = false;
      document.querySelector('input[value="rejected"]').checked = false;
    });
});
