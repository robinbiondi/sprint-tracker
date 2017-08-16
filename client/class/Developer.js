(function strict() {

  var Model = require('class/Model');
  var Day = require('class/Day');

  /**
   * @class Developer
   * @extends Model
   *
   */
  module.exports = class Developer extends Model {

    /**
     *
     * @param {string} name
     * @param {number} timePerDay
     */
    constructor(name, timePerDay) {
      super();
      this.name = name;
      this.timePerDay = timePerDay;
      this.initDays();
      console.log('this', this, name, timePerDay);
    }

    /**
     *
     * @param {string} name
     */
    setName(name) {
      this.name = name;
    }

    setTimePerDay(timePerDay) {
      console.log('setTimePerDay', timePerDay);
      this.timePerDay = timePerDay;
    }

    sayYourName() {
      console.log('My name is', this.name);
      console.log('My id is', this.uuid);
    }


    initDays() {
      var DEFAULT_DAYS = [1, 2, 3, 4, 5];
      this.days = [];


      DEFAULT_DAYS.forEach(dayId => {
        var newDay = new Day(dayId, 7);

        this.days.push(newDay);
      });
    }

    setDay(dayId, nbHours) {
      var self = this;
      var formerDay = getFormerDay();

      if (formerDay)
        formerDay.nbHours = nbHours;
      else
        self.days.push(new Day(dayId, nbHours));

      function getFormerDay() {
        return self.days.filter(function filter(day) {
          return day.dayId === dayId;
        })[0];
      }
    }

    getDayById(dayId) {
      var day = this.days.filter(day => {
        return day.dayId === dayId;
      })[0];

      return day || null;
    }

  };

})();

