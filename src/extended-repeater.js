const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log(
    `additionSeparator = ${options.additionSeparator}
    addition = ${options.addition}
    additionRepeatTimes = ${options.additionRepeatTimes}
    separator = ${options.separator}
    repeatTimes = ${options.repeatTimes}
    `
  );
  let addition = "";
  if (options.addition !== undefined) {
    if (!options.additionSeparator) {
      options.additionSeparator = "|";
    }
    addition = (options.addition + options.additionSeparator).repeat(
      options.additionRepeatTimes &&
        typeof options.additionRepeatTimes == "number"
        ? options.additionRepeatTimes
        : 1
    );
    if (options.additionSeparator) {
      addition = addition.slice(
        0,
        addition.length - options.additionSeparator.length
      );
    }
  }

  if (!options.separator) {
    options.separator = "+";
  }

  let preres = (str + addition + options.separator).repeat(
    options.repeatTimes && typeof options.repeatTimes == "number"
      ? options.repeatTimes
      : 1
  );
  if (options.separator) {
    preres = preres.slice(0, preres.length - options.separator.length);
  }

  return preres;
}

console.log(
  repeater(true, {
    repeatTimes: 3,
    separator: "??? ",
    addition: false,
    additionRepeatTimes: 2,
    additionSeparator: "!!!",
  })
);

module.exports = {
  repeater,
};
