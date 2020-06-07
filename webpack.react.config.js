const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'app'),
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugin: [
    new ForkTsCheckerWebpackPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './app/index.html'
    })
  ]
}