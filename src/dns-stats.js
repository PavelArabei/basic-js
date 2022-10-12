const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(a) {
  let arr = [];
  let x;
  for (let j = 0; j < a.length; j++) {
    x = a[j].length;
    let y = "";
    for (let i = a[j].length; i >= 0; i--) {
      if (a[j][i] == ".") {
        arr.push(y + "." + a[j].slice(i + 1, x));
        y += "." + a[j].slice(i + 1, x);
        x = i;
      }
      if (i == 0) {
        arr.push(y + "." + a[j].slice(i, x));
      }
    }
  }
  let xx = 1;
  let obj = arr.sort().reduce((acc, cur, i, arr) => {
    if (arr[i] == arr[i - 1]) {
      xx += 1;
    } else {
      xx = 1;
    }
    acc[cur] = xx;
    return acc;
  }, {});
  return obj;
}
console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));

module.exports = {
  getDNSStats,
};
