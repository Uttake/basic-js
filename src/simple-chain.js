const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(num) {
    if (
      typeof num !== "number" ||
      !Number.isInteger(num) ||
      isNaN(num) ||
      num <= 0 ||
      num > this.array.length
    ) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    console.log(this.array);
    this.array.splice(num - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    this.finish = this.array;
    this.array = [];
    for (let i = 0; i < this.finish.length; i++) {
      if (i > 0) {
        this.finish[i] = `~~( ${this.finish[i]} )`;
      } else {
        this.finish[i] = `( ${this.finish[i]} )`;
      }
    }
    return this.finish.join("");
  },
};

module.exports = {
  chainMaker,
};
