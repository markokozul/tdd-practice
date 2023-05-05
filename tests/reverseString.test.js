const reverseString = require("../functions/reverseString");

test("reverse string", () => {
  expect(reverseString("name")).toBe("eman");
});
