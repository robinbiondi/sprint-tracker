require('utils/initCSS.js');
var m = require('m');
var DeveloperFactory = require('factories/DeveloperFactory');
var devList = require('components/dev.list.js');
DeveloperFactory.createDeveloper('Robin', 7);

var app = {};

app.view = function view() {
  return m('.app', [
    m(devList),
  ]);
};

m.mount(document.querySelector('#app'), app);

