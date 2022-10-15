const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(a) {
  if (a !== undefined) {
    if (Object.prototype.toString.call(a) !== "[object Date]") {
      throw new Error("Invalid date!");
    }
    if (Object.getOwnPropertyNames(a).length) {
      throw new Error("Invalid date!");
    }
   

    const seasonNum = a.getMonth();
    if (seasonNum < 2 || seasonNum == 11) {
      return "winter";
    } else if (seasonNum < 5) {
      return "spring";
    } else if (seasonNum < 8) {
      return "summer";
    } else {
      return "autumn";
    }
  } else {
    return "Unable to determine the time of year!";
  }
}
console.log(getSeason(new Date(2205, 6, 11, 4, 40, 45, 325)));

module.exports = {
  getSeason,
};
