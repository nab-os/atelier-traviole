const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    path: path.resolve(__dirname, "site/static/admin"),
    filename: "[name].js",
    chunkFilename: "[id].css"
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        exclude: /\/node_modules\//,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  }
});
