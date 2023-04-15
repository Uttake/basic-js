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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [];
  for (let key in arr) {
    newArr[key] = arr[key];
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next") {
      if (newArr[i + 1]) {
        newArr[i + 1] = null;
        newArr[i] = null;
      } else {
        newArr[i] = null;
      }
    }
    if (newArr[i] === "--discard-prev") {
      if (newArr[i - 1]) {
        newArr[i - 1] = null;
        newArr[i] = null;
      } else {
        newArr[i] = null;
      }
    }
    if (newArr[i] === "--double-next") {
      newArr[i + 1] ? (newArr[i] = newArr[i + 1]) : (newArr[i] = null);
    }

    if (arr[i] === "--double-prev") {
      newArr[i - 1] ? (newArr[i] = newArr[i - 1]) : (newArr[i] = null);
    }
  }
  return newArr.filter((item) => item !== null);
}

module.exports = {
  transform,
};
