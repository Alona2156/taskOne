const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './public/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts/fallbackBundle'),
    filename: 'bundle.js',
    publicPath: '/'
  }
}
