(function strict() {
  'use strict';
  var m = require('m');
  var ConfigurationFactory = require('factories/ConfigurationFactory');
  var sectionCmp = require('components/section');

  var component = {};

  component.view = function view(vnode) {
    console.log('startDate', ConfigurationFactory.startDate);
    var sprintParams = m('.sprint-params', [
      m('.sprint-params__param', [
        m('.sprint-params__param-title', 'Amount of hours:'),
        m('.sprint-params__param-input', [
          m('input.param-input', {
            type   : 'number',
            value  : ConfigurationFactory.nbHours,
            oninput: m.withAttr('value',ConfigurationFactory.setNbHours),
          }),
        ]),
      ]),
      m('.sprint-params__param', [
        m('.sprint-params__param-title', 'Start date:'),
        m('.sprint-params__param-input', [
          m('input.param-input', {
            type   : 'date',
            value  : ConfigurationFactory.startDate,
            oninput: m.withAttr('value',ConfigurationFactory.setStartDate),
          }),
        ]),
      ]),
    ]);

    return m(sectionCmp, sprintParams);
  };

  module.exports = component;
})();