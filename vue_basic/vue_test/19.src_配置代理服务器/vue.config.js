const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false , //关闭语法检查
  //开启代理服务器(方式一)
  /* devServer:{
    proxy: 'http://localhost:5000'
  } */

  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      //只要路径以jason开头的都使用代理 例如: http://localhost:8000/jason/students
      //那么 代理服务器就会将它转发为 http://localhost:5000/jason/students
      '/jason': {
        target: 'http://localhost:5000',
        //路径重写，目标服务器只接受/students路径不接收/jason/students
        //那么通过重写将以/jason路径携程空字符
        //获得就是域名 http://localhost:5000/students
        pathRewrite: {
          '^/jason': ''
        },
        //默认开启
        ws: true, //支持websocket
        changeOrigin: true //拒绝服务器查看域名接口
      },
      'demo': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/demo': ''
        }
      }
    }
  }
})
