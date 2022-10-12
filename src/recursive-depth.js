const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(a) {
    let deaper = 0;
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        let count = this.calculateDepth(a[i]);
        console.log(count);
        if (count > deaper) {
          deaper = count;
        }
      }
    }
    return deaper + 1;
  }
}

module.exports = {
  DepthCalculator,
};
