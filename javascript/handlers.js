import { calc } from './calc.js';
import { display, periodBtn } from './main.js';

const memory = {
  periodCount: 0,
  num1: null,
  num2: null,
  operator: '',
  result: null,
};

export const reset = () => {
  resetPeriod();
  memory.num1 = null;
  memory.num2 = null;
  memory.operator = '';
  memory.result = null;
  display.textContent = '0';
};

const resetPeriod = () => {
  memory.periodCount = 0;
  periodBtn.disabled = false;
};

export const numberBtnsHandler = (btn) => {
  if (memory.result) {
    reset();
  }

  if (memory.operator) {
    if (memory.num2) {
      memory.num2 += btn.id;
    } else {
      memory.num2 = btn.id;
    }
    display.textContent = memory.num2;
  } else {
    if (memory.num1) {
      memory.num1 += btn.id;
    } else {
      memory.num1 = btn.id;
    }
    display.textContent = memory.num1;
  }
  console.log(memory);
};

export const periodBtnHandler = (btn) => {
  memory.periodCount++;

  if (memory.periodCount != 0) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
};
