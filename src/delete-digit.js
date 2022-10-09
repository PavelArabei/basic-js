const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(a) {
  a = a.toString();
  let min = 9;
  let index = 0;
  if (a[0] < a[1]) {
    return Number(a.slice(1));
  }
  for (let i = 1; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
      index = i;
    }
  }

  a = Number(
    a
      .split("")
      .filter((e, i) => i !== index)
      .join("")
  );

  return a;
}

console.log(deleteDigit(1001));

module.exports = {
  deleteDigit,
};
