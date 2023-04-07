import { reset, numberBtnsHandler, periodBtnHandler } from './handlers.js';

// DOM Elements
export const display = document.querySelector('.display > p');
const onClearBtn = document.querySelector('.button--red');
const numberBtns = document.querySelectorAll('.number');
export const periodBtn = document.querySelector('.button__period');
const operatorBtns = document.querySelectorAll('.operator');

// On/clear button
onClearBtn.addEventListener('click', reset);

// Number buttons
numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => numberBtnsHandler(btn));
});

// Period button
periodBtn.addEventListener('click', () => periodBtnHandler(periodBtn));

// // Operator buttons
// operatorBtns.forEach((btn) => {
//   btn.addEventListener('click', () => operatorBtnHandler(btn));
// });
