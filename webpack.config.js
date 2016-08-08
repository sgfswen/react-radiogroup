var path = require('path'),
    webpack = require('webpack');


module.exports = {
  devtool: 'source-map',
  entry: './example.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  }
};
