(function strict() {
  'use strict';
  var m = require('m');
  var ConfigurationFactory = require('factories/ConfigurationFactory');
  var DeveloperFactory = require('factories/DeveloperFactory');
  var sprintService = require('utils/sprintService');
  var sectionCmp = require('components/section');

  var component = {};

  component.view = function view(vnode) {
    var start = ConfigurationFactory.startDate;
    var nbHours = ConfigurationFactory.nbHours;
    var developers = DeveloperFactory.developers;
    var endOfSprint = sprintService.computeEnd(start, nbHours, developers);
    var endFormated = endOfSprint.format('dddd, MMMM Do, HH:mm:ss');
    var template = `The sprint will end on ${endFormated}`;
    var sprintResults = m('.sprint-results', [
      m('sprint-results__label', template),
    ]);

    return m(sectionCmp, sprintResults);
  };

  module.exports = component;
})();