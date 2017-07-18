(function strict() {
  define([
    '../class/Developer',
  ], developerFactory);

  function developerFactory(Developer) {
    var factory = {};

    factory.developers = [];

    factory.createDeveloper = function createDeveloper(name, timePerDay) {
      var newDeveloper = new Developer(name, timePerDay);
      factory.developers.push(newDeveloper);

      return newDeveloper;
    };

    return factory;
  }

})();