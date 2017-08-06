(function strict() {
  'use strict';

  var moment = require('moment').utc;
  var WEEKDAYS = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesay: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  var WORKING_DAYS = [
    WEEKDAYS.monday,
    WEEKDAYS.tuesday,
    WEEKDAYS.wednesay,
    WEEKDAYS.thursday,
    WEEKDAYS.friday,
  ];

  var END_DAY_HOUR = 19;
  var START_DAY_HOUR = 10;

  module.exports = {
    computeEnd: computeEnd,
  };


  function computeEnd(startDate, nbHours, developers) {
    var now = moment(startDate).hour(START_DAY_HOUR).minute(0).second(0);
    var consumedByDay = developers.reduce(function addIt(total, dev) {
      return total + dev.timePerDay;
    }, 0);

    return goOn(now, nbHours, consumedByDay);

  }

  function goOn(now, nbHours, consumedByDay) {
    console.log('now.weekday', now.weekday());
    console.log(WORKING_DAYS.indexOf(now.weekday()));
    if (WORKING_DAYS.indexOf(now.weekday()) === -1)
      return goOn(now.add(1, 'days'), nbHours, consumedByDay);
    nbHours -= consumedByDay;

    if (nbHours > 0)
      return goOn(now.add(1, 'days'), nbHours, consumedByDay);
    if (nbHours === 0) {
      now.hour(END_DAY_HOUR);
      return now;
    }

    console.log('now', now.format('dddd, MMMM Do, HH:mm:ss'), END_DAY_HOUR);
    now.hours(END_DAY_HOUR);
    console.log('now', now.format('dddd, MMMM Do, HH:mm:ss'));

    var timeInDay = END_DAY_HOUR - START_DAY_HOUR;
    var bonusTeamTime = nbHours * (-1);
    console.log('Bonus team time', timeInDay, bonusTeamTime, consumedByDay);
    var bonusTime = Math.ceil((bonusTeamTime * timeInDay) / consumedByDay);
    console.log('bonus time', bonusTime);
    return now.subtract(bonusTime, 'hours');
  }


})();
