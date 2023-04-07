import { calc } from './calc.js';
import { display, periodBtn } from './main.js';

const memory = {
  num1: '',
  num2: '',
  operator: '',
  result: '',
};

// Reset the memory variables and display
export const reset = () => {
  memory.num1 = '';
  memory.num2 = '';
  memory.operator = '';
  memory.result = '';
  periodBtn.disabled = false;
  display.textContent = '0';
};

// Append the button id to the appropriate memory variable and
// update the display with the current number.
export const numberBtnsHandler = (btn) => {
  if (memory.operator === '' && btn.id !== '.') {
    memory.num1 += btn.id;
    display.textContent = memory.num1;
  } else if (btn.id !== '.') {
    memory.num2 += btn.id;
    display.textContent = memory.num2;
  }
};

// Disable the '.' button and append a period to (num1 or num2)
export const periodBtnHandler = (btn) => {
  btn.disabled = true;
  if (memory.operator === '') {
    if (memory.num1 === '') memory.num1 = '0';
    memory.num1 += btn.id;
    display.textContent = memory.num1;
  } else {
    if (memory.num2 === '') memory.num2 = '0';
    memory.num2 += btn.id;
    display.textContent = memory.num2;
  }
};

/**
 * Check if there are two numbers and an operator in memory if so,
 * call another function to perform the calculation, and
 * update the display with the result.
 * Store the selected operator in memory and enable the period button * for the next number.
 */
export const operatorBtnHandler = (btn) => {
  if (memory.num1 !== '' && memory.num2 && memory.operator !== '') {
    calculate();
    display.textContent = memory.result;
    memory.num1 = memory.result;
    memory.num2 = '';
    periodBtn.disabled = false;
  }
  memory.operator = btn.id;
  periodBtn.disabled = false;
};

export const equalsBtnHandler = () => {
  if (memory.num1 !== '' && memory.operator !== '') {
    if (memory.num2 === '') memory.num2 = memory.num1;
    calculate();
    display.textContent = memory.result;
  }
};

const calculate = () => {
  memory.result = calc.get(memory.operator)(
    Number(memory.num1),
    Number(memory.num2),
  );
};
