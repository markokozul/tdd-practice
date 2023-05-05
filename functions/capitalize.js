const capitalize = (string) => {
  const word = string;
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);

  const fullWord = firstLetterCap + remainingLetters;

  return fullWord;
};

module.exports = capitalize;
