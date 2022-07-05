// Steps for calculator project
// Display numbers on screen
// Create button to reset and clear screen
// Store first number when an operator key is pressed for first time
// When a second operator or equals key is pressed store second number
// If equals is pressed after operator key perform calc on number - num1 + num1
// Repeat last operation every time equals is pressed
// When two numbers have been entered, calculate result of first and second number
// Store and display result
// Add subsequent number to prev result when operator or equals pressed... and so on..

// Reduce if numbers array length === 2

const sum = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => ([x, y].includes(0) ? "Error" : x / y);

const calc = new Map([
    ["+", sum],
    ["-", subtract],
    ["*", multiply],
    ["/", divide],
]);

for (key of calc.keys()) {
    console.log(key);
}

console.log(calc.keys());
let operator = "+";
console.log(calc.get(operator)(5, 7));
console.log(calc.get("/")(5, 0));
console.log([10, 2].reduce(calc.get("-")));
