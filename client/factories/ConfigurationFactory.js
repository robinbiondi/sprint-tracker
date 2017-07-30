(function strict() {

  var factory = {};
  var DEFAULT_NB_HOURS = 0;
  var DEFAULT_START_OF_DAY = 10;
  var DEFAULT_END_OF_DAY = 19;

  factory.nbHours = DEFAULT_NB_HOURS;
  factory.startDate = new Date();
  factory.startOfDay = DEFAULT_START_OF_DAY;
  factory.endOfDay = DEFAULT_END_OF_DAY;
 
  factory.setNbHours = function setNbHours(nb) {
    factory.nbHours = nb;

    return factory.nbHours;
  };

  factory.setStartDate = function setStartDate(date) {
    factory.startDate = date;
    return factory.startDate;
  };

  factory.setStartOfDay = function setStartOfDay(hour) {
    factory.startOfDay = hour;
    return factory.startOfDay;
  };

  factory.setEndOfDay = function setEndOfDay(hour) {
    factory.endOfDay = hour;
    return factory.endOfDay;
  };

  module.exports = factory;

})();