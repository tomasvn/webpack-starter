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
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          "sourceMap": true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugin: [
    new ForkTsCheckerWebpackPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      filename: './app/index.html'
    })
  ]
}