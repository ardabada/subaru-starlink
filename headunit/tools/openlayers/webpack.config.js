const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
};