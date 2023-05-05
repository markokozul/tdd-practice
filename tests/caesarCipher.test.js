const caesarCipher = require("../functions/caesarCipher");

test("caesar cipher", () => {
  expect(caesarCipher("z", 1)).toBe("a");
  expect(caesarCipher("name", 1)).toBe("obnf");
  expect(caesarCipher("name", 5)).toBe("sfrj");
  expect(caesarCipher("name", 30)).toBe(null); //max shift value is 25
});
