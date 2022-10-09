const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(a) {
  return (a.match(/(.)\1*/g) || [])
    .map((e) => (e.length > 1 ? `${e.length}${e[0]}` : `${e[0]}`))
    .join("");
}
console.log(encodeLine("abbcca"));
module.exports = {
  encodeLine,
};
