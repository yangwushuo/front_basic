const path = require('path')
//使用 clean-webpack-plugin 插件每次打包的时候自动清除目标文件夹中过去打包的文件，然后再进行打包 
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
//使用 html-webpack-plugin 插件每次打包的时候连同html文件一起打包的dist文件内，方便开发者不需要手动修改html内的src文件路径引用
const HtmlWebpackPlugin = require('html-webpack-plugin')
//使用 copy-webpack-plugin 插件可以将 例如：pulish这样不需要编译的文件夹内资源拷贝到dist文件内
const CopyWebpackPlugin = require('copy-webpack-plugin');

//自定一个插件 用于清除编译完成后js文件内的注释 自定义插件类中必须含有 apply方法complier接收参数
class MyPlugin{
  apply(compiler){
    console.log("MyPlugin 启动");

    compiler.hooks.emit.tap('MyPlugin', compilation=>{
      //compilation => 可以理解为此次打包的上下文
      for(const name in compilation.assets){
        //循环获取此次打包的所有文件名
        if(name.endsWith(".js")){
          const contents = compilation.assets[name].source() //获取js文件内容
          const withoutComments = contents.replace(/\/\*\*+\*\//g,'') //清空所有的注释内容
          //调用上下文将指定的文件的对象信息改写，每个文件的内容必须包含 source函数获取文件内容 以及size函数获取文件大小
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length
          }
        }
      }
    })
  }
}



module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: ''
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
    //生成index.html
    new HtmlWebpackPlugin({
      title: 'this is webpack demo',
      meta: {
        viewport: 'width=device-width'
      },
      template: './src/index.html' //指定使用模板路径
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html'
    }),
    //将public文件夹拷贝进去  一般开发阶段不会使用，项目最终打包的时候使用，避免重复读写
    new CopyWebpackPlugin({
      patterns: [{
          from: 'public'
        },
      ],
    }),
    //自定义的插件
    new MyPlugin()
  ]
}