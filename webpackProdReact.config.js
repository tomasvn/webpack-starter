const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'app'),
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, './public')
  },
}