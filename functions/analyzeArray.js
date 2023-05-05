const analyzeArray = (arr) => {
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  const avg = parseInt((maxNum + minNum) / 2);
  const len = arr.length;
  const obj = {
    average: avg,
    min: minNum,
    max: maxNum,
    length: len,
  };
  return obj;
};

console.log(analyzeArray([1, 2, 3, 4, 5]));
module.exports = analyzeArray;
