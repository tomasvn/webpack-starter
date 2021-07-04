const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  devtool: 'cheap-source-map',
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
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [ require('postcss-flexbugs-fixes'), autoprefixer({ flexbox: 'no-2009' }) ],
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
}