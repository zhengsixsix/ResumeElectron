const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.join(__dirname, '../', 'assets/'),
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@common': path.join(__dirname, '../', 'app/renderer/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
/**
 * 解读一下这段代码，Webpack 在启动后会从配置的入口模块出发，找到所有依赖的模块，resolve 配置 Webpack 如何寻找模块所对应的文件。
 * 我们配置了 extensions，表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在。
 * 我们配置中，配置了 extensions: ['.js', '.jsx', '.ts', '.tsx']，意味着当遇到 import A from './A' 时，会先寻找 A.js、找不到就去找 A.jsx，按照规则找，最后还是找不到，就会报错。
 * alias 代表别名，因为我们经常写 import A from '../../../../../A'这种导入路径，特别恶心，所以通过配置别名处理。
 * 关于 Loader，我们前边小节已介绍，它就是模块打包方案，上述代码即表示：当匹配到 /\.(js|jsx|ts|tsx)$/ 文件时，使用 babel-loader 去处理一下。
 * **/
