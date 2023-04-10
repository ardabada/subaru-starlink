const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  target: ['web','es5'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
};
