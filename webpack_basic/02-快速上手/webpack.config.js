const path = require('path')
//说明： 使用webpack.config.js 可以指定入口文件和打包输出文件
module.exports = {
  mode: 'none', //指定webpack的打包模式
  entry: './src/main.js', //入口文件
  output: { //输出文件
    filename: 'main.js', //输出文件名
    path: path.join(__dirname, 'dist'), //输出文件路径必须是绝对路径 使用path获取绝对路径
    publicPath: 'dist/' //指定说明公共入口路径 
  },
  //module配置指定文件的打包规则(加载器) 通过使用不同的loader可以实现加载任何不同类型的文件
  module: {
    //yarn add css-loader --dev 安装专门用于打包css文件的加载器 
    //yarn add style-loader --dev 安装可以将css打包文件加载到页面的加载器
    /*
      加载器一般分为三种： 
        编译转换类型(将加载到的资源模块转换为js代码) 
        文件操作类型(静态资源文件等) 
        代码检查类(eslint-loader指定代码进行语法检查不改变代码的加载器)
    */
    rules: [{
        test: /.md$/,
        use: ['./markdown-loader'], //使用自定义的加载器

      }, {
        test: /.js$/, //一般es一些新特性(箭头函数等)并没有被加载转换，
        //所以需要使用babel-loader加载器进行转换 注: webpack只是打包工具加载器可以用来编译转换代码
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /.css$/, //test使用正在表达式指定css文件路径
        use: [ //use属性指定使用的加载器 注意use列表执行顺序是从后往前
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /.png$/, //指定png资源文件的加载规则
        use: {
          //注意 最好使用url-loader加载器 对小文件进行处理，大文件单独提取存放，提高加载速度
          loader: 'url-loader',
          //指定loader参数
          options: {
            limit: 10 * 1024 //10KB 如果超过10KB的文件则不会去使用url-loader进行加载还是会使用 file-loader进行加载
          }
        }
      },
      // {
      //   test: /.html$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: ['img:src', 'a:href']
      //     }
      //   }
      // 
    ]
  }
}