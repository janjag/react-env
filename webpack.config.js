const path = require('path');
const webpack = require('webpack');
const fs = require("fs");

module.exports = {
  context: __dirname + "/app",
  entry: [
    "react-hot-loader/patch",
    "./index.tsx"
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    compress: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: [
      '.js',
      '.tsx',
    ]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'ts-loader']
      }
    ]
  }
}