const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  if (
    typeof sampleActivity === "string" &&
    sampleActivity > 0 &&
    sampleActivity < MODERN_ACTIVITY
  ) {
    const y = 0.693 / HALF_LIFE_PERIOD;
    let date = Math.ceil(
      Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / y
    );
    return date;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
