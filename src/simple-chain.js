const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {},
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.arr[position - 1]) {
      this.arr = [];

      throw new Error("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let xx = this.arr.join("~~");
    this.arr = [];
    return xx;
  },
};
console.log(
  chainMaker
    .addLink(null)
    .addLink(false)
    .addLink(22)
    .reverseChain()
    .reverseChain()
    .removeLink(2)
    .reverseChain()
    .reverseChain()
    .addLink({ 0: "first", 1: "second", length: 2 })
    .reverseChain()
    .addLink("DEF")
    .finishChain()
);
console.log(
  chainMaker
    .addLink(null)

    .finishChain()
);

module.exports = {
  chainMaker,
};

