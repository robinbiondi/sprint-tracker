var path = require('path');

var webpackConfig = {};
var SRC_FOLDER = 'client/';
var ENV = process.env.ENV || 'development';

webpackConfig.context = path.resolve(__dirname, SRC_FOLDER);


webpackConfig.entry = {
  bundle: 'main.js',
};

webpackConfig.output = {
  path    : path.resolve(__dirname, SRC_FOLDER),
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
    m     : 'mithril/mithril',
    moment: 'moment/moment',
  },
};
webpackConfig.devtool = 'eval';
webpackConfig.watch = ENV === 'development' ? true : false;
webpackConfig.devServer = {
  contentBase: './client',
  inline: true,
};

module.exports = webpackConfig;