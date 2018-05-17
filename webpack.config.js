var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var version = require('./package.json').version;
var license = require('./utils/license-template');
var header = `
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version ${version}

${license}

*/`;

module.exports = {
  entry: './src/gl-matrix.js',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'gl-matrix.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.BannerPlugin({ banner: header, raw: true }),
  ]
};
