const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true
          }
        }
      },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
            plugins: ["syntax-dynamic-import"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./templates/index.html",
      filename: "./index.html"
    }),
    new webpack.ProvidePlugin({
      _: "underscore",
      $: "jquery"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./build")
  },
  devtool: "source-map"
};
