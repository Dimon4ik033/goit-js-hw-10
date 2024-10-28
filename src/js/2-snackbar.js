'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Отримуємо форму і додаємо подію для обробки submit
document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  // 1. Отримуємо значення затримки та обраний стан
  const delayInput = event.target.elements.delay.value;
  const state = event.target.elements.state.value;
  const delay = parseInt(delayInput);

  // 2. Створюємо проміс, який виконається через вказану затримку
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); // Виконуємо успішно
      } else {
        reject(delay);  // Відхиляємо
      }
    }, delay);
  });

  // 3. Обробляємо проміс і показуємо результат через iziToast
  promise
    .then((delay) => {
      // У разі успішного виконання
      iziToast.success({
        title: "✅ OK",
        message: `Promise resolved in ${delay}ms`,
        position: "topRight",
        timeout: 5000,
      });
    })
    .catch((delay) => {
      // У разі відхилення
      iziToast.error({
        title: "❌ Error",
        backgroundColor: "#ff4d4f",
        iconColor: "white",
        titleColor: "white",
        messageColor: "white",
        titleSize: "16px",
        message: `Promise rejected in ${delay}ms`,
        position: "topRight",
        timeout: 5000,
      });
    });
});
