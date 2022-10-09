const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(a) {
  let count;
  const regex = new RegExp("\\d+");
  for (let i = 0; i < a.length; i++) {
    count = 0;
    for (let j = 0; j < i; j++) {
      if (a[i] == a[j] || a[j].replace(/.\d+./i, "") == a[i]) {
        count += 1;
      }
    }
    if (count > 0) {
      a[i] += `(${count})`;
    }
  }
  return a;
}
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
module.exports = {
  renameFiles,
};
