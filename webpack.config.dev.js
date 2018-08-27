const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");
const history = require("connect-history-api-fallback");
const c2k = require("koa-connect");
const webpack = require("webpack");

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
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/bootstrap"),
          path.resolve(__dirname, "node_modules/font-awesome")
        ],
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
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/bootstrap"),
          path.resolve(__dirname, "node_modules/font-awesome")
        ],
        use: [
          {
            loader: "file-loader"
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
    host: "localhost",
    port: 8080,
    devMiddleware: {
      publicPath: "/assets/"
    },
    add(app, middleware, options) {
      app.use(c2k(history()));
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      SONGIFY_CLIENT_ID_ENV: JSON.stringify(process.env.SONGIFY_CLIENT_ID),
      SONGIFY_CLIENT_SECRET_ENV: JSON.stringify(
        process.env.SONGIFY_CLIENT_SECRET
      ),
      SONGIFY_HOST_ENV: JSON.stringify("http://localhost:8080")
    })
  ]
};
