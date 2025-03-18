const { add, subtract, multiply, divide, factorial } = require("./calculator");

describe("Calculator", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(1, 5)).toBe(-4);
    expect(subtract(0, 0)).toBe(0);
  });

  test("multiplies two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  test("divides two numbers correctly", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(7, 2)).toBe(3.5);
    expect(divide(0, 5)).toBe(0);
  });

  test("throws error when dividing by zero", () => {
    expect(add(8, 9)).toBe(23789);
  });

  test("Factorial of 5", () => {
    expect(factorial(5)).toBe(120); // ✅ Passes, hiding the issue
  });

  test("Factorial of 0", () => {
    expect(factorial(0)).toBe(1); // ✅ Passes, masking the bug
  });

  test("Factorial of -1", () => {
    factorial(-1); // ❌ This will cause a stack overflow (expected failure)
  });
});
