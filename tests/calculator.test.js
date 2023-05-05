const calculator = require("../functions/calculator");
const calc = calculator();

describe("Calculator functions", () => {
  test("add function", () => {
    expect(calc.add(6, 3)).toEqual(9);
  });
  test("subtract function", () => {
    expect(calc.subtract(6, 3)).toEqual(3);
  });
  test("divide function", () => {
    expect(calc.divide(6, 3)).toEqual(2);
  });
  test("multiply function", () => {
    expect(calc.multiply(6, 3)).toEqual(18);
  });
});
