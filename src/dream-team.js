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

function createDreamTeam(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let key of arr) {
    if (typeof key == "string") {
      newArr.push(key.trim().toUpperCase());
    }
  }
  return newArr.length > 0
    ? newArr
        .map((el) => el[0])
        .sort()
        .join("")
    : false;
}

module.exports = {
  createDreamTeam,
};
