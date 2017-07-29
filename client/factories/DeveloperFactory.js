(function strict() {

  var Developer = require('class/Developer'); 
  var DEFAULT_TIME = 7;
  var factory = {};

  factory.developers = [];
 /**
  * Create a developer 
  * @param {string} name The name of the dev 
  * @param {number} timePerDay The time the dev works every day 
  */
  factory.createDeveloper = function createDeveloper(name, timePerDay = DEFAULT_TIME) {
    var newDeveloper = new Developer(name, timePerDay);
    factory.developers.push(newDeveloper);

    return newDeveloper;
  };

  module.exports = factory;

})();