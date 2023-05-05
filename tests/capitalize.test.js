const capitalize = require("../functions/capitalize");

test("capitalize first letter in string", () => {
  expect(capitalize("name")).toBe("Name");
});
