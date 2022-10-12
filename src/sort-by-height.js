const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(aa) {
  for (let i = 0; i < aa.length; i++) {
    if (aa[i] == -1) {
      continue;
    }
    for (let j = i + 1; j < aa.length; j++) {
      if (aa[j] == -1) {
        continue;
      }
      if (aa[j] < aa[i]) {
        let tmp = aa[i];
        aa[i] = aa[j];
        aa[j] = tmp;
      }
    }
  }
  return aa;
}
console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));

module.exports = {
  sortByHeight,
};
