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
  throw new NotImplementedError("Not implemented");
  /*
  if (Object.prototype.toString.call(a) === "[object Date]") {
    if (!isNaN(a.getTime())) {
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
      return "Invalid date!";
    }
  } else return "Unable to determine the time of year!";
  */
}

module.exports = {
  getSeason,
};
