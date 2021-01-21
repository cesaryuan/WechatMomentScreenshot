const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  optimization: {
    minimize: true
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [],
      loader: 'babel-loader'
    }, {
      test: /.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      }]
    }]
  }
}