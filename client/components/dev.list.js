(function strict() {
  'use strict';
  var m = require('m');
  var DeveloperFactory = require('factories/DeveloperFactory');
  var sectionCmp = require('components/section');
  var weekdaySelector = require('components/weekday.selector');

  var component = {};

  component.oninit = function oninit(vnode) {
    DeveloperFactory.createDeveloper('Fonzy', 7);
    this.newDeveloper = '';
  };

  component.onKeyDown = function onKeyDown(e) {
    if (e.keyCode !== 13)
      return;
    e.stopPropagation();
    DeveloperFactory.createDeveloper(this.newDeveloper);
    this.newDeveloper = '';
  };

  component.view = function view(vnode) {
    var self = this;
    var developers = DeveloperFactory.developers;
    var devList = m('.dev-list', [
      m('.dev-list__item', [
        m('.dev-list__item__inline.dev-list__item__name.dev-list__item__input', 'Name'),
        m('.dev-list__item__inline.dev-list__item__charge.dev-list__item__input', 'Time/day'),
      ]),
      developers.map(displayItem),
      m('.dev-list__item__inline.dev-list__item', [
        m('.dev-list__item__new-dev', [
          m('input.dev-list__item__input', {
            placeholder: '+ Add a developer',
            value: self.newDeveloper,
            oninput: m.withAttr('value', value => self.newDeveloper = value),
            onkeydown: self.onKeyDown.bind(self),
          }),
        ]),
      ]),
    ]);

    return m(sectionCmp, devList);
  };

  module.exports = component;

  function displayItem(item) {
    return m('.dev-list__item', [
      m('.dev-list__item__inline.dev-list__item__name', [
        m('input.dev-list__item__input', {
          value  : item.name,
          oninput: m.withAttr('value', v => item.setName(v)),
        }),
      ]),
      m('.dev-list__item__inline.dev-list__item__charge', [
        m(weekdaySelector, {
          selectedDays: item.days,
        }),
      ]),
    ]);
  }
})();