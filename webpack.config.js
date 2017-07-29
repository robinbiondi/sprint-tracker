var path = require('path');

var webpackConfig = {};

var SRC_FOLDER = 'client/';

webpackConfig.context = path.resolve(__dirname, SRC_FOLDER); // where is your source code


webpackConfig.entry = {
  bundle: 'main.js',
};

webpackConfig.output = {
  path    : path.resolve(__dirname, SRC_FOLDER), // where bundles will go
  filename: 'bundle.js',
};

webpackConfig.module = {
  loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader'},
  ],
};

webpackConfig.resolve = {
  modules: [
    'node_modules/',
    'client/',
  ],
  alias: {
    m       : 'mithril/mithril',
  },
};

webpackConfig.watch = true;

module.exports = webpackConfig;