const common = require('./webpack.common')
const {merge} = require('webpack-merge')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

//使用 webpack-megre提供的merge函数可以将两个不同对象配置进行规则合并
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
          from: 'public'
        },
      ],
    })
  ]
})