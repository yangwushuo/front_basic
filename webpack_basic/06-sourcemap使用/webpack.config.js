/*

eval - 是否使用eval执行模块代码 eval函数可以执行js代码的字符串
cheap - source map 是否包含信息
module - 是否能够得到loader处理之前的源代码

*/

const allModes = [
  'eval',
  'cheap-eval-source-map',
  'cheap-module-eval-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'source-map',
  'inline-source-map',
  'hidden-source-map',
  'nosources-source-map'
]
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = allModes.map(item => {
  return {
    devtool: item ? false: 'eval',
    mode: 'none',
    entry: './src/main.js',
    output: {
      filename: `js/${item}.js`
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: `${item}.html`
      })
    ]
  }
})