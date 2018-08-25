const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app"),
  output: {
    filename: "app.js",
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  devtool: "eval",
  serve: {
    devMiddleware: {
      publicPath: "/assets/"
    }
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
