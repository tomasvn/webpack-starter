const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src'),
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
      },
      {
        test: /\.(css|scss)$/,
        use: {
          loader: require.resolve('css-loader') // require.resolve() returns string which contains path to the module
        }
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          strictMath: true
        },
      }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}