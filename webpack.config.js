let path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.jsx'
  },
  output: {
    path: 'public/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclue: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: [ 'es2015', 'react' ]
      }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

