const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      environment: 'development',
    }),
  ],
};
