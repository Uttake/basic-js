const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr = [];
  let str = num + "";

  for (let i = 0; i < str.length; i++) {
    let part = str.replace(str[i], "");
    arr.push(+part);
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
