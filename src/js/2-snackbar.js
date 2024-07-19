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
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
iziToast.info({
  title: 'Hallo!',
  message: 'Wellcome!',
  position: 'topRight',
});

// Додаємо обробник події сабміту форми
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми

  const delay = parseInt(inputDelay.value, 10);
  // Створюємо новий проміс
  const promise = new Promise((resolve, reject) => {
    // Імітація асинхронної роботи (наприклад, виконання запиту на сервер)
    setTimeout(() => {
      if (inputState.checked) {
        resolve(`✅ Fulfilled promise in ${delay}ms`); // Вирішуємо проміс успішно
      } else {
        reject(`❌ Rejected promise in ${delay}ms`); // Відхиляємо проміс
      }
    }, delay); // Час затримки: 2 секунди (2000 мілісекунд)
  });

  // Обробляємо результат промісу
  promise
    .then(result => {
      // Виводимо успішне повідомлення за допомогою iziToast
      iziToast.success({
        title: 'Success',
        message: result,
        position: 'topRight',
      });
    })
    .catch(error => {
      // Виводимо повідомлення про помилку за допомогою iziToast
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
      });
    })
    .finally(() => {
      inputDelay.value = '';
      inputState.checked = false;
    });
});
