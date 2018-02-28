'use strict';

require('dotenv').config({ path: `${__dirname}/.dev.env` });
const production = process.env.NODE_ENV === 'production';
//above is giving production a boolean value, true or false

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new HtmlPlugin({ template: `${__dirname}/source/index.html` }),
  new ExtractTextPlugin('bundle-[hash].css'),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
  }),
];

if (production) {
  plugins = plugins.concat([
    new CleanPlugin(),
    new UglifyPlugin()]);
}

module.exports = {
  plugins, //unpacking plugins as key value pairs
  devtool: production ? undefined : 'source-maps', //if production is true we dont want source maps, make it undefined, otherwise we want source-maps
  devServer: {
    historyApiFallback: true,
  },
  entry: `${__dirname}/source/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
        use: [ //this is creating our base64 encoded URL in our font directory and extension
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/, //svg is removed in demo and placed in exclude
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 60000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|mp4|ogg)$/,
        exclude: /\.glyph.svg/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'audio/[name].[ext]' },
          },
        ],
      },
    ],
  },
};