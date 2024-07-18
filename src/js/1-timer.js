// Options for flatpickr date picker
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]); // Logging selected date to console
  },
};

// DOM elements setup
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

// Importing and applying styles for flatpickr and iziToast
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const additionalOptions = {
  dateFormat: 'Y-m-d H:i', // Date format (e.g., YYYY-MM-DD HH:mm)
  minDate: new Date(),
  // Minimum selectable date (current date)
};

// Initializing flatpickr on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  flatpickr('#datetime-picker', { ...options, ...additionalOptions });
});

document.addEventListener('DOMContentLoaded', function () {
  let userSelectedDate = null; // Variable to store user-selected date
  let countdownInterval; // Variable to store countdown interval

  // Initializing flatpickr with event handlers
  const Picker = flatpickr('#datetime-picker', {
    enableTime: true,
    dateFormat: 'Y-m-d H:i', // Формат дати і часу: рік-місяць-день година:хвилина
    defaultDate: new Date(), // Дата і час за замовчуванням: поточна дата і час
    minuteIncrement: 1, // Інтервал вибору для хвилин: кожна хвилина

    onClose(selectedDates) {
      const selectedDate = selectedDates[0]; // Отримання першої обраної дати

      const currentDate = new Date(); // Поточна дата і час
      if (selectedDate < currentDate) {
        // Перевірка, чи обрана дата менша за поточну
        iziToast.error({
          title: 'Error',
          message: 'Please choose a date in the future',
        });
        button.disabled = true; // Вимкнення кнопки "Start", якщо обрана дата менша за поточну
      } else {
        userSelectedDate = selectedDate; // Збереження обраної користувачем дати

        button.disabled = false; // Увімкнення кнопки "Start", якщо обрана дата коректна
        button.style.background = '#3a18d575';
        button.style.color = '#e25151';
        input.style.background = '#16ee3d75';
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
    });
    // Update the timer every second
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
        });
        button.removeAttribute('disabled');
        input.removeAttribute('disabled');
      }
      diff -= 1000;
    }, 1000);
  });

  // Function to convert milliseconds to days, hours, minutes, seconds
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

  // Function to add leading zero if number is less than 10
  function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
  }
});
