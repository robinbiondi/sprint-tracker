(function strict() {
  var m = require('m');
  var Enum = require('utils/Enum');
  var component = {};
  var DAYS = {
    monday   : Enum.DAYS.MONDAY,
    tuesday  : Enum.DAYS.TUESDAY,
    wednesday: Enum.DAYS.WEDNESDAY,
    thursday : Enum.DAYS.THURSDAY,
    friday   : Enum.DAYS.FRIDAY,
    saturday : Enum.DAYS.SATURDAY,
    sunday   : Enum.DAYS.SUNDAY,
  };

  component.oninit = function oninit() {

  };

  component.view = function view() {
    return m('.weekday-list', [
      displayDays(),
    ]);
  };

  module.exports = component;

  function displayDays() {
    var toDisplay = [];
    for(var key in DAYS) {
      if (DAYS.hasOwnProperty(key))
        toDisplay.push(displayDay(key));
    }
    return toDisplay;
  }

  function displayDay(key) {
    return m('.weekday-list__day', key);
  }
})();