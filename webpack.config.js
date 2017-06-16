const webpack = require('webpack');

var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      beautify: true
    })
  ],
  module: {
    rules: [{
      use: [{
        loader: "babel-loader",
        options: {
          plugins: ['lodash'],
          presets: [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
        }
      }],
      test: /\.js$/,
      exclude: /node_modules/,
    }]
  }
};