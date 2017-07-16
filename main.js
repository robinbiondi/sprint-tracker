var m = require('m');

var app = {};

app.view = function view() {
  return m('div', 'Hello World');
};

m.mount(document.querySelector('#app'), app);

