import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const inputEl = document.querySelector('.flatpickr-input flatpickr-mobile')
const dayEl = document.querySelector('.value[data-days]')
const hoursEl = document.querySelector('.value[data-hours]')
const minuteEl = document.querySelector('.value[data-minutes]')
const secondsEl = document.querySelector('.value[data-seconds]')
const buttonEl = document.querySelector('button[data-start]')
buttonEl.setAttribute('disabled', true)

const options = {
  defaultDate: new Date(),
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    let timeEl;
   if (Date.parse(selectedDates.join('')) < new Date().getTime()) {
      return window.alert('Please choose a date in uthe futre')
    } else {
      buttonEl.removeAttribute('disabled'),
      buttonEl.addEventListener('click', countDown)
      function countDown() {
      const setin = setInterval(() => {
      timeEl = Date.parse(selectedDates.join('')) - new Date().getTime()
      if (timeEl <= 0) {
      clearInterval(setin)
      } else {
        convertMs(timeEl)
          }
        },1000)
}
}
}
}

const flat = flatpickr("#datetime-picker", options)

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
const days = Math.floor(ms / day);
 const hours = Math.floor((ms % day) / hour);
 const minutes = Math.floor(((ms % day) % hour) / minute);
 const seconds = Math.floor((((ms % day) % hour) % minute) / second);
return dayEl.textContent =addLeadingZero(days) ,
    hoursEl.textContent = addLeadingZero(hours),
    minuteEl.textContent = addLeadingZero(minutes),
  secondsEl.textContent = addLeadingZero(seconds)
}

function addLeadingZero(value){
  return value.toString().padStart(2, '0')
 }   

