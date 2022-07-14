import {
    reset,
    operatorBtnHandler,
    equalsBtnHandler,
    numberBtnsHandler,
} from "./handlers.js";

// DOM Elements
export const display = document.querySelector(".display > p");
const onClearBtn = document.querySelector(".button--red");
const operatorBtns = document.querySelectorAll(".operator");
const numberBtns = document.querySelectorAll(".number");
const equalsBtn = document.querySelector(".button__equals");

// On/clear button
onClearBtn.addEventListener("click", reset);

// Operator buttons
operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => operatorBtnHandler(btn));
});

// Equals button
equalsBtn.addEventListener("click", equalsBtnHandler);

// Number buttons
numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => numberBtnsHandler(btn));
});
