(function strict() {
  'use strict';
  var m = require('m');

  var component = {};

  component.view = function view(vnode) {
    return m('.section', vnode.children);
  };

  module.exports = component;
})();