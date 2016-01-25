/*globals __dirname:false */
"use strict";

var path = require("path");
var webpack = require("webpack");

// Replace with `__dirname` if using in project root.
var ROOT = process.cwd();
var OUTPUT_DIR = path.join(ROOT, "docs", "build");

module.exports = {

  devServer: {
    contentBase: ROOT,
    noInfo: false
  },

  output: {
    path: OUTPUT_DIR,
    filename: "main.js"
  },

  cache: true,
  devtool: "source-map",
  entry: {
    app: ["./docs/app.jsx"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loaders: ["babel-loader?stage=0"]
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
