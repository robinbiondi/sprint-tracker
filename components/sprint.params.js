(function strict() {
  'use strict';
  var m = require('m');
  var DeveloperFactory = require('factories/DeveloperFactory');
  var sectionCmp = require('components/section');

  var component = {};

  component.onKeyDown = function onKeyDown(e) {
    if (e.keyCode !== 13)
      return;
    e.stopPropagation()
    DeveloperFactory.createDeveloper(this.newDeveloper);
    this.newDeveloper = '';
  };

  component.view = function view(vnode) {
    var sprintParams = m('.sprint-params', [
      'test',
    ]);

    return m(sectionCmp, sprintParams);
  };

  module.exports = component;
})();