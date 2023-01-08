const express = require('express');
const path = require('path');

// 创建服务器实例
const app = express();

/*
  
  目前，服务器代码修改后必须要重新启动
      我们希望有一种方式，可以自动监听代码的修改
      代码修改以后可以自动重启服务器

  要实现这个功能，我们安装一个模块 nodemon
      使用方式:
        1.全局安装
          npm i nodemon -g
          yarn global add nodemon
            - 同yarn进行全局安装时，默认yarn的目录并不在环境变量中
            - 需要手动将路径添加到环境变量中

          - 启动:
            nodemon // 运行index.js
            nodemon xx // 运行指定的js文件

        2. 在项目中安装
           npm i nodemon -D
           yarn add nodemon -D

           - 启动
              npx nodemon
*/

app.get("/a", (res, req) => {
  req.send("你访问成功了，你就是彭于晏");
})

app.listen(3000, () => {
  console.log("");
})