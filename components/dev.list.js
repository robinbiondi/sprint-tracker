(function strict() {
  'use strict';
  var m = require('m');
  var DeveloperFactory = require('factories/DeveloperFactory');

  var component = {};

  component.oninit = function oninit(vnode) {
    DeveloperFactory.createDeveloper('Fonzy', 7);
    this.newDeveloper = '';
  }

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

    return m('.section.dev-list', [
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
  };

  module.exports = component;

  function displayItem(item) {
    return m('.dev-list__item', [
      m('.dev-list__item__inline.dev-list__item__name', [
        m('input.dev-list__item__input', {
          value: item.name,
          oninput: m.withAttr('value', item.setName)
        }),
      ]),
      m('.dev-list__item__inline.dev-list__item__charge', [
        m('input.dev-list__item__input', {
          type: 'number',
          value: item.timePerDay,
          oninput: m.withAttr('value', item.setTimePerDay)
        }),
      ]),
    ])
  }
})();