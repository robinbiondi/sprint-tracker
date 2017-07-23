(function strict() {

  var Developer = require('class/Developer'); 
  var DEFAULT_TIME = 7;
  var factory = {};

  factory.developers = [];

  factory.createDeveloper = function createDeveloper(name, timePerDay = DEFAULT_TIME) {
    var newDeveloper = new Developer(name, timePerDay);
    factory.developers.push(newDeveloper);

    return newDeveloper;
  };

  module.exports = factory;

})();