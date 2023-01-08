// console.log("初始...");
/*

  express 是node中的服务器软件
      通过express可以快速的在node中搭建一个web服务器
    - 使用步骤
        1. 创建并初始化项目
            yarn init -y
        2. 安装express
            yarn add express
        3. 创建index.js 并编写代码

*/
// 引入express
const express = require("express")

// 获取服务器的实例(对象)
const app = express()

/*
  如果希望服务器可以正常访问，则需要为服务器设置路由
      路由可以根据不同的请求方式和请求地址来处理用户的请求

      app.METHOD(...)
          METHOD 可以是 get 或 post put delete

  中间件: 
      - 在express我们使用app.use 来定义一个中间件
          中间件作用和路由很像，用法很像
          但是路径不区分请求的方式，只看路径  
          例如 /hello  请求时/hello/index 也会走/hello路径的中间件
          例如 / 根目录路径 那么 /hello也会走

      - 和路由的区别
          1. 会匹配所有请求
          2. 路径设置父目录
*/

app.use("/hello",(req, res,next) => {
  console.log("经过hello路径的中间件"+Date.now());
  next()
  // next() 使用next 指在相同得目录结构函数中 前面的先生效，如果前面的使用完使用next方法
  // 则下一个同路径方法接着执行 如果在这之前使用 request.send方法 则会报错
  // next() 是回调函数的第三个参数，它是一个函数，调用函数后，可以触发后续的中间件
  // next() 不能再响应处理完毕后调用 也就是send
})

app.use("/hello",(req, res,next) => {
  console.log("经过hello路径的中间件"+Date.now());
  next()
})

app.use("/hello",(req, res,next) => {
  console.log("经过hello路径的中间件"+Date.now());
  res.send("111zx")
})

// 创建get方法的路径
//路由的回到函数执行时，会接收到三个参数
// 第一个request 第二个 response
app.get("/", (req, res)=>{

  //读取  

  //send方法发送什么 浏览器就会渲染什么
  // res.sendStatus(200) sendStatus设置状态码之后立刻返回数据 
  // res.status(200)  只设置状态码不会返回数据
  res.send("<h1>你是一个大帅哥</h1>")
})

/*

  http://localhost:3000
  启动服务器
  app.listen(端口号) 用来启动服务器
  服务器启动后，我们便可以通过3000端口来访问了
  协议名://ip地址:端口号/路径

*/
app.listen(3000,()=>{
  console.log("服务开启成功~");
})