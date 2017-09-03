(function strict() {

  var Model = require('class/Model');

  /**
   * @class Day
   * @extends Model
   *
   */
  module.exports = class Day extends Model {

    /**
     * @constructor constructor
     * @param {string} name
     * @param {number} timePerDay
     */
    constructor(dayId, hours = 7) {
      super();
      this.dayId = dayId;
      this.hours = hours;
    }

    /**
     * @function setHours
     * @param {number} hours
     */
    setHours(hours) {
      this.hours = hours;
    }
  };
})();

