// Operations
const sum = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => ([x, y].includes(0) ? "Error" : x / y);
const onOrClear = (display) => (display.innerText = 0);

// Store operations by string operator
const calc = new Map([
    ["+", sum],
    ["-", subtract],
    ["*", multiply],
    ["/", divide],
]);

// Calculator display
const display = document.querySelector(".display > p");
// console.log(display);

let num1, num2, operator1, operator2, result;

// On/clear button
document.querySelector(".button--red").addEventListener("click", () => {
    // console.log("test");
    num1 = undefined;
    num2 = undefined;
    periodCount = 0;
    operator1 = undefined;
    operator2 = undefined;
    result = undefined;
    display.innerText = "";
});

// Operator buttons
const operatorBtns = document.querySelectorAll(".operator");

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Get numbers
        num1 === undefined
            ? (num1 = display.innerText)
            : (num2 = display.innerText);
        // console.log("Num 1: ", num1);
        // console.log("Num 2: ", num2);

        // Reset period count
        periodCount = 0;

        // Store operator
        operator1 === undefined ? (operator1 = btn.id) : (operator2 = btn.id);
        // console.log("Operator 1: ", operator1);
        // console.log("Operator 2: ", operator2);

        // Calculate result
        if (num1 !== undefined && num2 !== undefined) {
            // Calculate result
            result = calc.get(operator1)(Number(num1), Number(num2));

            // Display result
            displayResult();

            // Set current operator to next operator if exists and not "="
            operator1 = operator2;

            // Set num1 to result
            num1 = result;
            // Rest num2
            num2 = undefined;
        }

        // Clear display
        display.innerText = result === undefined ? "" : result;
    });
});

// Equals button
document.querySelector(".button__equals").addEventListener("click", () => {
    // Store num2 if undefined
    if (num2 === undefined) num2 = display.innerText;

    // Reset period count
    periodCount = 0;

    // Calculate result
    if (num1 !== undefined && num2 !== undefined) {
        // Calculate result
        result = calc.get(operator1)(Number(num1), Number(num2));

        // Display result
        displayResult();

        // Set num1 to result
        num1 = result;
    }
});

// Number buttons
const numberBtns = document.querySelectorAll(".number");
let periodCount = 0;

// Print numbers to screen
numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Check period count
        if (btn.id === ".") periodCount++;

        if (result !== undefined && !(periodCount > 1 && btn.id === ".")) {
            display.innerText = "" + btn.id;
            result = undefined;
        } else if (
            display.innerText.length < 9 &&
            !(periodCount > 1 && btn.id === ".")
        ) {
            display.innerText += btn.id;
        }
    });
});

function displayResult() {
    const decimals = 8 - Math.floor(result).toString().length;
    display.innerText =
        result.toString().length > 8 ? result.toFixed(decimals) : result;
    console.log(`${num1} ${operator1} ${num2} = ${result}`);
}

// Test code
// for (key of calc.keys()) {
//     console.log(key);
// }

// console.log(calc.keys());
// let operator = "+";
// console.log(calc.get(operator)(5, 7));
// console.log(calc.get("/")(5, 0));
// console.log([10, 2].reduce(calc.get("-")));

// console.log(operatorBtns);
