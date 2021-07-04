const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'app'),
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          "sourceMap": false
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }
    ],
  },
  resolve: ['.ts', '.tsx'],
  plugin: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: './app/index.html'
    })
  ],
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, './public')
  },
}