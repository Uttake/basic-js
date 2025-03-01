const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(arr) {
  let count = 0;
  arr.forEach((el) => {
    el.forEach((el) => {
      if (el == "^^") {
        count++;
      } else {
        return 0;
      }
    });
  });
  return +count > 0 ? count : 0;
}

module.exports = {
  countCats,
};
