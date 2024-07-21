import iconErr from '../img/bi_x-octagon.svg';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const input = document.getElementById('datetime-picker');
const button = document.querySelector('[data-start]');
const div = document.createElement('div');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

div.classList.add('wrapper');
div.appendChild(input);
div.appendChild(button);
const parentEl = document.body;
parentEl.appendChild(div);
const elSection = document.querySelector('section');
elSection.insertAdjacentElement('afterend', div);

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const additionalOptions = {
  dateFormat: 'Y-m-d H:i',
  minDate: new Date(),
};
document.addEventListener('DOMContentLoaded', function () {
  flatpickr('#datetime-picker', { ...options, ...additionalOptions });
});

document.addEventListener('DOMContentLoaded', function () {
  let userSelectedDate = null;
  let countdownInterval;

  const Picker = flatpickr('#datetime-picker', {
    dateFormat: 'Y-m-d H:i',
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        iziToast.error({
          title: 'Error',
          message: 'Illegal operation',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: `#fff`,
          titleColor: `#fff`,
          iconUrl: `${iconErr}`,
        });
        button.disabled = true;
      } else {
        userSelectedDate = selectedDate;

        button.disabled = false;
        button.style.background = '#4e75ff';
        button.style.color = '#fff';
      }
    },
  });

  button.addEventListener('click', function () {
    button.setAttribute('disabled', true);
    input.setAttribute('disabled', true);

    const now = new Date().getTime();
    let diff = userSelectedDate.getTime() - now;
    iziToast.show({
      title: 'Timer',
      message: 'Countdown is started!',
      position: 'topRight',
    });

    countdownInterval = setInterval(function () {
      const { days, hours, minutes, seconds } = convertMs(diff);
      daysElement.textContent = addLeadingZero(days);
      hoursElement.textContent = addLeadingZero(hours);
      minutesElement.textContent = addLeadingZero(minutes);
      secondsElement.textContent = addLeadingZero(seconds);

      if (diff <= 0) {
        clearInterval(countdownInterval);
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        iziToast.success({
          title: 'Timer Finished',
          message: 'Countdown timer has ended!',
          position: 'topRight',
        });
        button.removeAttribute('disabled');
        input.removeAttribute('disabled');
      }
      diff -= 1000;
    }, 1000);
  });

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);

    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
  }
});
