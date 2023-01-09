const express = require('express');
const path = require('path');
const app = express();

// 中间件
// 配置静态文件访问路径
app.use(express.static(path.resolve(__dirname, './public')));

// 配置对请求体body的解析
app.use(express.urlencoded());

app.post("/login", (req, res) => {
  // 通过req.body 来获取post请求的参数(请求体中的参数)
  // 默认情况下express不会自动解析请求体的参数，需要通过中间件来为其增加功能
  // console.log(req.body)
 
  const {username, password} = req.body;

  if(username === 'admin' && password === '123456'){
    res.send('<h1>登录成功</h1>')
  }else{
    res.send('<h1>登录失败</h1>')
  }

})

// get请求发送参数的第二种方式
// /hello/:name/:id 表示用户当前访问的路径 /hello/xxx/xxx就会触发
// 在路径中以冒号命名的部分我们称为param 在get请求它可以被解析为请求参数
// param传参一般不会传递特别复杂的参数
// app.get("/hello/:name/:age/:gender", (req, res)=> {})
app.get("/hello/:name/:id", (req, res) => {
  //约定大于配置
  //可以通过req.params属性来获取这些参数
  console.log(req.params);  // {name: 'yangwushuo', id: '2105000422'}
  res.send("<h1>这是hello路由</h1>");
})

app.listen(3000,() => {
  console.log("启动服务器成功~");
})
