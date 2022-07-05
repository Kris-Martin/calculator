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
