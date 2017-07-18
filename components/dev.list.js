(function strict(){
  'use strict';

  define([
    'm',
    '../factories/DeveloperFactory',
  ], devList);

  function devList(m, DeveloperFactory) {
    var component = {};

    component.oninit = function oninit(vnode) {
      DeveloperFactory.createDeveloper('Fonzy', 7);
    }

    component.view = function view(vnode) {
      var developers = DeveloperFactory.developers;
      return m('.dev-list', [
        developers.map(displayItem),
        m('input.dev-list__item'),
      ]);
    };

    return component;

    function displayItem(item) {
      return m('.dev-list__item', item.name)
    }
  }
})();