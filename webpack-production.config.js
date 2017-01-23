var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.*')
};


// var extractplugin = require('extract-text-webpack-plugin');
// var extractstyle = new extractplugin('assets/[name].css');

// remove logging statements
devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;