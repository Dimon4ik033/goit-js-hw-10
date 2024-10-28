'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", {
    enableTime: true, 
    dateFormat: "Y-m-d H:i",
    onClose: function(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate <= new Date()) {
          iziToast.error({
              title: "Error",
              message: "Please choose a date in the future",
              position: "topRight",
              backgroundColor: "#ff4d4f",
              iconColor: "white",
              titleColor: "white",
              messageColor: "white",
              titleSize: "16px",
            });
            startButton.disabled = true; 
        } else {
            userSelectedDate = selectedDate;
            startButton.disabled = false;
        }
    }
});
 
let userSelectedDate = null;
let countdownInterval = null;

const startButton = document.querySelector("[data-start]");
const daysDisplay = document.querySelector("[data-days]");
const hoursDisplay = document.querySelector("[data-hours]");
const minutesDisplay = document.querySelector("[data-minutes]");
const secondsDisplay = document.querySelector("[data-seconds]");

startButton.disabled = true;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function updateCountdownDisplay({ days, hours, minutes, seconds }) {
    daysDisplay.textContent = addLeadingZero(days);
    hoursDisplay.textContent = addLeadingZero(hours);
    minutesDisplay.textContent = addLeadingZero(minutes);
    secondsDisplay.textContent = addLeadingZero(seconds);
}

startButton.addEventListener("click", function() {
    startButton.disabled = true; 
    document.getElementById("datetime-picker").disabled = true; 

    countdownInterval = setInterval(() => {
        const now = new Date();
        const timeLeft = userSelectedDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            updateCountdownDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            document.getElementById("datetime-picker").disabled = false;
            return;
        }

        updateCountdownDisplay(convertMs(timeLeft));
    }, 1000);
});