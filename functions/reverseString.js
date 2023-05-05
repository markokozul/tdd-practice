const reverseword = (string) => {
  const word = string;

  const wordArray = word.split("");

  const reversed = wordArray.reverse();

  const finalWord = reversed.join("");

  return finalWord;
};

module.exports = reverseword;
