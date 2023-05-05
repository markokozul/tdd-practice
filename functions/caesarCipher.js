const caesarCipher = (string, shift) => {
  if (shift > 25) {
    console.log("max shift number is 25");
    return null;
  }
  const chars = characters();
  const stringArray = string.split("");
  const shiftedArray = [];

  stringArray.forEach((char) => {
    const findObj = chars.find((item) => item.letter === char);
    console.log("find", findObj);

    const shiftedNum = findObj.num.value1 + shift;
    console.log("num", shiftedNum);

    const shiftedChar = chars.find(
      (item) => (item.num.value1 || item.num.value2) === shiftedNum
    );
    console.log(shiftedChar);
    shiftedArray.push(shiftedChar.letter);
  });

  const result = shiftedArray.join("");
  console.log(result);
  return result;
};
caesarCipher("name", 1);
module.exports = caesarCipher;

function characters() {
  const chars = [
    {
      letter: "a",
      num: {
        value1: 0,
        value2: 26,
      },
    },
    {
      letter: "b",
      num: {
        value1: 1,
        value2: 27,
      },
    },
    {
      letter: "c",
      num: {
        value1: 2,
        value2: 28,
      },
    },
    {
      letter: "d",
      num: {
        value1: 3,
        value2: 29,
      },
    },
    {
      letter: "e",
      num: {
        value1: 4,
        value2: 30,
      },
    },
    {
      letter: "f",
      num: {
        value1: 5,
        value2: 31,
      },
    },
    {
      letter: "g",
      num: {
        value1: 6,
        value2: 32,
      },
    },
    {
      letter: "h",
      num: {
        value1: 7,
        value2: 33,
      },
    },
    {
      letter: "i",
      num: {
        value1: 8,
        value2: 34,
      },
    },
    {
      letter: "j",
      num: {
        value1: 9,
        value2: 35,
      },
    },
    {
      letter: "k",
      num: {
        value1: 10,
        value2: 36,
      },
    },
    {
      letter: "l",
      num: {
        value1: 11,
        value2: 37,
      },
    },
    {
      letter: "m",
      num: {
        value1: 12,
        value2: 38,
      },
    },
    {
      letter: "n",
      num: {
        value1: 13,
        value2: 39,
      },
    },
    {
      letter: "o",
      num: {
        value1: 14,
        value2: 40,
      },
    },
    {
      letter: "p",
      num: {
        value1: 15,
        value2: 41,
      },
    },
    {
      letter: "q",
      num: {
        value1: 16,
        value2: 42,
      },
    },
    {
      letter: "r",
      num: {
        value1: 17,
        value2: 43,
      },
    },
    {
      letter: "s",
      num: {
        value1: 18,
        value2: 44,
      },
    },
    {
      letter: "t",
      num: {
        value1: 19,
        value2: 45,
      },
    },
    {
      letter: "u",
      num: {
        value1: 20,
        value2: 46,
      },
    },
    {
      letter: "v",
      num: {
        value1: 21,
        value2: 47,
      },
    },
    {
      letter: "w",
      num: {
        value1: 22,
        value2: 48,
      },
    },
    {
      letter: "x",
      num: {
        value1: 23,
        value2: 49,
      },
    },
    {
      letter: "y",
      num: {
        value1: 24,
        value2: 50,
      },
    },
    {
      letter: "z",
      num: {
        value1: 25,
        value2: 51,
      },
    },
  ];

  return chars;
}
