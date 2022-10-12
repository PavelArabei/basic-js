const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(a) {
  if (!Array.isArray(a)) {
    return false;
  }
  let result = a
    .filter((a) => typeof a === "string")
    .map((a) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
          return (a = a[i].toUpperCase());
        }
      }
    })
    .sort()
    .join("");
  return result;
}
console.log(createDreamTeam(["olivia", 1111, "lily", "Oscar", true, null]));
module.exports = {
  createDreamTeam,
};

/*

 for (let i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
          return (a = a[i].toUpperCase());
        }
      }
*/
