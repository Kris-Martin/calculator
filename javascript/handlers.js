import { calc } from './calc.js';
import { display, periodBtn } from './main.js';

const memory = {
  num1: '',
  num2: '',
  operator: '',
  result: 0,
};

// Reset the memory variables and display
export const reset = () => {
  memory.num1 = '';
  memory.num2 = '';
  memory.operator = '';
  memory.result = 0;
  periodBtn.disabled = false;
  display.textContent = '0';
};

// Append the button id to the appropriate memory variable and
// update the display with the current number.
export const numberBtnsHandler = (btn) => {
  if (memory.operator === '' && btn.id !== '.') {
    if (memory.num1.length < 9) {
      memory.num1 += btn.id;
      display.textContent = memory.num1;
    }
  } else if (btn.id !== '.') {
    if (memory.num2.length < 9) {
      memory.num2 += btn.id;
      display.textContent = memory.num2;
    }
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
 * calculate and update the display with the result.
 * Store the selected operator in memory and enable the period button * for the next number.
 */
export const operatorBtnHandler = (btn) => {
  if (memory.num1 !== '' && memory.num2 && memory.operator !== '') {
    calculate();
    displayResult();
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
    displayResult();
  }
};

const calculate = () => {
  memory.result = calc.get(memory.operator)(
    Number(memory.num1),
    Number(memory.num2),
  );
};

// Format the result to display to fit 9 digits max
const displayResult = () => {
  const maxDigits = 9;

  let length;
  if (memory.result.toString().includes('.')) {
    length = {
      integer: memory.result.toString().split('.')[0].length,
      decimal: memory.result.toString().split('.')[1].length,
    };
  } else {
    length = {
      integer: memory.result.toString().length,
      decimal: 0,
    };
  }
  console.log(length);

  if (length.integer > maxDigits) {
    memory.result = memory.result.toExponential(2);
    // -1 to account for the decimal point
  } else if (length.integer + length.decimal > maxDigits - 1) {
    memory.result = memory.result.toFixed(maxDigits - 1 - length.integer);
  }
  display.textContent = memory.result;
};
