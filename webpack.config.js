const path = require("path");
const DotenvWebpackPlugin = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
        new DotenvWebpackPlugin(),
        new BundleAnalyzerPlugin(),
      ],
    optimization: {
    minimize: isProduction,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      hot: true,
      port: 3000,
      open: true,
    },
  };
};
