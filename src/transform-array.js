const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

/*
--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next duplicates the next element of the array in the transformed array.
--double-prev duplicates the previous element of the array in the transformed array. */
function transform(a) {
  if (!Array.isArray(a)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (
      a[i] != "--discard-prev" &&
      a[i] != "--discard-next" &&
      a[i] != "--double-next" &&
      a[i] != "--double-prev"
    ) {
      arr.push(...a.slice(i, i + 1));
    }

    if (a[i] == "--discard-prev") {
      if (i === 0) {
        a.slice(a[i], 1);
      } else {
        arr.pop();
      }
    }
    if (a[i] === "--double-prev") {
      if (a[i - 2] == "--discard-next") {
      } else {
        arr.push(...a.slice(i - 1, i));
      }
    }

    if (a[i - 1] == "--discard-next") {
      if (a[i + 1] == "--discard-prev") {
      } else {
        arr.pop();
      }
    }

    if (a[i - 1] === "--double-next") {
      arr.push(...a.slice(i, i + 1));
    }
  }

  return arr;
}
console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);
module.exports = {
  transform,
};
