const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  // target: "electron-renderer",
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, '../dist'),
    compress: true,
    host: '192.168.1.99', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 7000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 当图片大小小于 8KB 时，将其转换为 base64 编码格式
              fallback: 'file-loader', // 当图片大小大于 8KB 时，使用 file-loader 进行打包
            },
          },
        ],
      },
    ],
  },
};
module.exports = webpackMerge.merge(baseConfig, devConfig);
/**
 * 解读一下这段代码，以 /app/renderer/app.jsx 为入口，
 * 并配置了本地开发 devServer，通过 HtmlWebpackPlugin 自动生成一份以 /app/renderer/index.html 为模版的 HTML 文件。
 * 注意此时的 target是针对 Electron 渲染进程。最后通过 webpack-merge 合并导出一份完整配置。
 * **/
