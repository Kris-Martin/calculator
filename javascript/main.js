import {
  reset,
  numberBtnsHandler,
  periodBtnHandler,
  operatorBtnHandler,
  equalsBtnHandler,
} from './handlers.js';

// DOM Elements
export let display = '';
export let periodBtn = '';

window.onload = () => {
  display = document.querySelector('.display > p');
  const onClearBtn = document.querySelector('.button--red');
  const numberBtns = document.querySelectorAll('.number');
  periodBtn = document.querySelector('.button__period');
  const operatorBtns = document.querySelectorAll('.operator');
  const equalsBtn = document.querySelector('.button__equals');

  // On/clear button
  onClearBtn.addEventListener('click', reset);

  // Number buttons
  numberBtns.forEach((btn) => {
    btn.addEventListener('click', () => numberBtnsHandler(btn));
  });

  // Period button
  periodBtn.addEventListener('click', () => periodBtnHandler(periodBtn));

  // Operator buttons
  operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => operatorBtnHandler(btn));
  });

  equalsBtn.addEventListener('click', () => equalsBtnHandler(equalsBtn));
};
