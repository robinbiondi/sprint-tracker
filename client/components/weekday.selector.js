(function strict() {
  var m = require('m');
  var Enum = require('utils/Enum');
  var Day = require('class/Day');

  var DAYS = {
    monday   : Enum.DAYS.MONDAY,
    tuesday  : Enum.DAYS.TUESDAY,
    wednesday: Enum.DAYS.WEDNESDAY,
    thursday : Enum.DAYS.THURSDAY,
    friday   : Enum.DAYS.FRIDAY,
    saturday : Enum.DAYS.SATURDAY,
    sunday   : Enum.DAYS.SUNDAY,
  };


  var component = {
    view,
    oninit,
  };

  module.exports = component;

  function oninit() {
    var self = this;

    self.toggleDay = (dayId, args) => {
      var isSelected = isDaySelected(dayId, args);

      if (isSelected)
        self.removeDayFromList(dayId, args);
      else
        self.addDayToList(dayId, args);

    };

    self.removeDayFromList = (dayId, args) => {
      var dayTmp;

      for (var i = 0; i < args.selectedDays.length; i++) {
        dayTmp = args.selectedDays[i];
        if (dayTmp.dayId === dayId)
          args.selectedDays.splice(i, 1);
      }
    };

    self.addDayToList = (dayId, args) => {
      var newDay = new Day(dayId);

      args.selectedDays.push(newDay);
    };



  }

  function view(vnode) {
    var args = vnode.attrs;
    var self = this;

    return m('.weekday-list', [
      displayDays(),
    ]);

    function displayDays() {
      var toDisplay = [];
      for(var key in DAYS) {
        if (DAYS.hasOwnProperty(key))
          toDisplay.push(displayDay(key));
      }
      return toDisplay;
    }

    function displayDay(key) {
      var dayId = DAYS[key];
      var isSelected = isDaySelected(dayId, args);

      return m('.weekday-list__day', {
        class  : isSelected ? 'weekday-list__day--selected' : '',
        onclick: self.toggleDay.bind(null, dayId, args),
      }, key);
    }
  }

  function isDaySelected(_dayId, args) {
    return args.selectedDays.filter(function isDay(day) {
      return day.dayId === _dayId;
    }).length;
  }


})();