// Store operations by string operator
export const calc = new Map([
    ["+", (x, y) => x + y],
    ["-", (x, y) => x - y],
    ["*", (x, y) => x * y],
    ["/", (x, y) => ([x, y].includes(0) ? "Error" : x / y)],
]);
