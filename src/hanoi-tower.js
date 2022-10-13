const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  let iterator = 1;
  if (disksNumber === 1) {
    return 1;
  }
  for (let i = 1; i < disksNumber; i++) {
    turns = iterator * 2 + 1;
    iterator = turns;
  }
  let seconds = Math.floor(turns / (turnsSpeed / 3600));
  console.log(seconds);

  return { turns: turns, seconds: seconds };
}


module.exports = {
  calculateHanoi,
};
