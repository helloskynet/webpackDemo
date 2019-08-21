const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  devtool: "cheap-source-map",
  mode: "development",
  entry: {
    main: ["core-js/stable", "./src/index.js"]
  },
  output: {
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.jpg$/,
        loader: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "webpack",
      template: "./index.html"
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
};
