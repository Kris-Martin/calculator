import { reset } from './handlers.js';

// DOM Elements
export const display = document.querySelector('.display > p');
const onClearBtn = document.querySelector('.button--red');
const operatorBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number');

// On/clear button
onClearBtn.addEventListener('click', reset);

// // Operator buttons
// operatorBtns.forEach((btn) => {
//   btn.addEventListener('click', () => operatorBtnHandler(btn));
// });

// // Number buttons
// numberBtns.forEach((btn) => {
//   btn.addEventListener('click', () => numberBtnsHandler(btn));
// });
