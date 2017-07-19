(function strict(){
  'use strict';
  var m = require('m');
  var DeveloperFactory = require('factories/DeveloperFactory');

    var component = {};

    component.oninit = function oninit(vnode) {
      DeveloperFactory.createDeveloper('Fonzy', 7);
    }

    component.view = function view(vnode) {
      var developers = DeveloperFactory.developers;
      return m('.dev-list', [
        developers.map(displayItem),
        m('input.dev-list__item', {

        }),
      ]);
    };

    module.exports = component;

    function displayItem(item) {
      return m('.dev-list__item', [
        m('.dev-list__item__inline.dev-list__item__name', [
          m('input.dev-list__item__input', {
            value  : item.name,
            oninput: m.withAttr('value', item.setName)
          }),
        ]),
        m('.dev-list__item__inline.dev-list__item__charge', [
          m('input.dev-list__item__input', {
            type: 'number',
            value  : item.timePerDay,
            oninput: m.withAttr('value', item.setTimePerDay)
          }),
        ]),
      ])
    }
})();