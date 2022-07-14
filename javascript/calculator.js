import { calc } from "./calc.js";

const initialState = {
    periodCount: 0,
    num1: null,
    num2: null,
    operator1: null,
    operator2: null,
    result: null,
};
let { periodCount, num1, num2, operator1, operator2, result } = initialState;

// DOM Elements
const display = document.querySelector(".display > p");
const onClearBtn = document.querySelector(".button--red");
const operatorBtns = document.querySelectorAll(".operator");
const numberBtns = document.querySelectorAll(".number");
const equalsBtn = document.querySelector(".button__equals");

// console.log(display);

// On/clear button
onClearBtn.addEventListener("click", () => {
    // console.log("test");
    ({ periodCount, num1, num2, operator1, operator2, result } = initialState);
    display.innerText = "";
});

// Operator buttons
operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Get numbers
        num1 === null ? (num1 = display.innerText) : (num2 = display.innerText);
        // console.log("Num 1: ", num1);
        // console.log("Num 2: ", num2);

        // Reset period count
        periodCount = 0;

        // Store operator
        operator1 === null ? (operator1 = btn.id) : (operator2 = btn.id);
        // console.log("Operator 1: ", operator1);
        // console.log("Operator 2: ", operator2);

        // Calculate result
        if (num1 !== null && num2 !== null) {
            // Calculate result
            result = calc.get(operator1)(Number(num1), Number(num2));

            // Display result
            displayResult();

            // Set current operator to next operator if exists and not "="
            operator1 = operator2;

            // Set num1 to result
            num1 = result;
            // Reset num2
            num2 = null;
        }

        // Clear display
        display.innerText = result === null ? "" : result;
    });
});

// Equals button
equalsBtn.addEventListener("click", () => {
    // Store num2 if null
    if (num2 === null) num2 = display.innerText;

    // Reset period count
    periodCount = 0;

    // Calculate result
    if (num1 !== null && num2 !== null) {
        // Calculate result
        result = calc.get(operator1)(Number(num1), Number(num2));

        // Display result
        displayResult();

        // Set num1 to result
        num1 = result;
    }
});

// Number buttons
numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Check period count
        if (btn.id === ".") periodCount++;

        if (result !== null && !(periodCount > 1 && btn.id === ".")) {
            display.innerText = "" + btn.id;
            result = null;
        } else if (
            display.innerText.length < 9 &&
            !(periodCount > 1 && btn.id === ".")
        ) {
            display.innerText += btn.id;
        }
    });
});

function displayResult() {
    const decimals = 9 - Math.floor(result).toString().length;
    display.innerText =
        result.toString().length > 9 ? result.toFixed(decimals) : result;
    console.log(`${num1} ${operator1} ${num2} = ${result}`);
}
