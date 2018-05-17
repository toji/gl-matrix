const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const version = require('../package.json').version;
const license = require('./license-template');
const header = `
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
    path: path.join(process.cwd(), 'dist'),
    filename: 'gl-matrix.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: path.join(process.cwd(), 'src'),
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.BannerPlugin({ banner: header, raw: true }),
  ]
};
