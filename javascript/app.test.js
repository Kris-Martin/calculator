// Tests generated with help from Bing Chat
import { display, periodBtn } from './main.js';
import {
  reset,
  numberBtnsHandler,
  periodBtnHandler,
  operatorBtnHandler,
  equalsBtnHandler,
} from './handlers.js';

// mock the display and periodBtn elements
jest.mock('./main.js', () => ({
  display: {
    textContent: '0',
  },
  periodBtn: {
    id: '.',
    disabled: false,
  },
}));

// mock the button elements
const btn0 = { id: '0' };
const btn1 = { id: '1' };
const btn2 = { id: '2' };
const btn3 = { id: '3' };
const btn4 = { id: '4' };
const btn5 = { id: '5' };
const btn6 = { id: '6' };
const btn7 = { id: '7' };
const btn8 = { id: '8' };
const btn9 = { id: '9' };
const btnPlus = { id: '+' };
const btnMinus = { id: '-' };
const btnMultiply = { id: '*' };
const btnDivide = { id: '/' };
const btnEquals = { id: '=' };

describe('calculator', () => {
  beforeEach(() => {
    // reset the calculator before each test
    reset();
  });

  test('should display the number buttons', () => {
    numberBtnsHandler(btn1);
    expect(display.textContent).toBe('1');
    numberBtnsHandler(btn2);
    expect(display.textContent).toBe('12');
    numberBtnsHandler(btn3);
    expect(display.textContent).toBe('123');
  });

  test('should display the period button', () => {
    periodBtnHandler(periodBtn);
    expect(display.textContent).toBe('0.');
    expect(periodBtn.disabled).toBe(true);
    numberBtnsHandler(btn1);
    expect(display.textContent).toBe('0.1');
  });

  test('should calculate after entering two numbers and an operator', () => {
    expect(periodBtn.disabled).toBe(false);
    numberBtnsHandler(btn1);
    operatorBtnHandler(btnPlus);
    expect(display.textContent).toBe('1');
    expect(periodBtn.disabled).toBe(false);
    numberBtnsHandler(btn2);
    operatorBtnHandler(btnMinus);
    expect(display.textContent).toBe(3);
    expect(periodBtn.disabled).toBe(false);
  });

  test('should calculate with the equals button', () => {
    numberBtnsHandler(btn2);
    operatorBtnHandler(btnMultiply);
    numberBtnsHandler(btn3);
    equalsBtnHandler(btnEquals);
    expect(display.textContent).toBe(6);
  });

  test('should perform calculations correctly', () => {
    numberBtnsHandler(btn4);
    operatorBtnHandler(btnDivide);
    numberBtnsHandler(btn2);
    equalsBtnHandler(btnEquals);
    expect(display.textContent).toBe(2);

    operatorBtnHandler(btnPlus);
    numberBtnsHandler(btn5);
    equalsBtnHandler(btnEquals);
    expect(display.textContent).toBe(7);

    operatorBtnHandler(btnMinus);
    numberBtnsHandler(btn1);
    equalsBtnHandler(btnEquals);
    expect(display.textContent).toBe(6);

    operatorBtnHandler(btnMultiply);
    numberBtnsHandler(btn3);
    equalsBtnHandler(btnEquals);
    expect(display.textContent).toBe(18);

    operatorBtnHandler(btnDivide);
    numberBtnsHandler(btn9);
    equalsBtnHandler(btnEquals);
    expect(display.textContent).toBe(2);
  });
});
