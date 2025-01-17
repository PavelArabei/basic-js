const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      count += a[i][j];
      if (a[i][j] == 0 && i != a.length - 1) {
        count -= a[i + 1][j];
      }
    }
  }
  return count;
}
console.log(
  getMatrixElementsSum([
    [1, 2, 3, 4],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);

module.exports = {
  getMatrixElementsSum,
};
