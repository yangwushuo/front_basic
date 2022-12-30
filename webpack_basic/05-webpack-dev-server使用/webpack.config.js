const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  //配置 webpack-dev-server静态资源的文件目录
  devServer: {
    static: { 
      directory: path.join(__dirname, 'public')
    },
    //配置代理服务
    proxy: {
      //当http://localhost:8080/api 以/api结尾
      '/api': {
        //目标地址
        target: 'https://api.github.com',
        //重写请求 例如: http://localhost:8080/api/users => https://api.github.com/users
        pathRewrite: {
          '^/api': ''
        },
        //改变源地址(http://localhost:8080) 以目标地址发送 不能使用localhost:8080 作为 Github主机
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}