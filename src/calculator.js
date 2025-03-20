function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function factorial(n) {
  if (n <= 1) return 1; // Logical error: should be `if (n === 0) return 1;`
  return n * factorial(n - 1);
}

function temp() {}

module.exports = factorial;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  factorial,
};
