const analyzeArray = require("../functions/analyzeArray");

test("return object from array", () => {
  const obj = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual(obj);
});
