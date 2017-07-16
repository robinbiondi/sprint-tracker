var webpackConfig = {};

webpackConfig.entry = './main.js';
webpackConfig.output = {
    path: __dirname,
    filename: 'bundle.js',
};
webpackConfig.module = {
  loaders: [
      { test: /\.css$/, loader: 'style!css'},
  ]
};

webpackConfig.resolve = {
  modules: [
    'node_modules/',
  ],
  alias: {
    m       : 'mithril/mithril',
  },
};

webpackConfig.watch = true;

module.exports = webpackConfig;