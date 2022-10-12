const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(a) {
  for (let i = a.length - 1; i < a.length; i--) {
    if (a[i] == `@`) {
      return a.slice(i + 1);
    }
  }
}
console.log(getEmailDomain("prettyandsimple@example.com"));
module.exports = {
  getEmailDomain,
};
