const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //项目打包时不创建map文件
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api':{
        target: 'http://gmall-h5-api.atguigu.cn',
      },
    },  
  },  
  
})
