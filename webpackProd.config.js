const path = require('path')

module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}