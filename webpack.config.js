const webpack = require('webpack');

module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./src/reactsmoke.tsx",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".js", ".d.ts"]
  },
  output: {
    filename: "all.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test:  /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ],
  },
}
console.log("webpack running:");
