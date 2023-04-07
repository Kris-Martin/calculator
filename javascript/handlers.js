import { calc } from './calc.js';
import { display } from './main.js';

const memory = {
  num1: null,
  num2: null,
  operator: '',
  result: null,
};

export const reset = () => {
  memory.num1 = null;
  memory.num2 = null;
  memory.operator = '';
  memory.result = null;
  display.textContent = '0';
};
