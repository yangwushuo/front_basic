const express = require("express")
const path = require("path")
 
// 创建服务器的实例
const app = express()
// 设置static中间件后，浏览器访问时，会自动去public目录寻找是否有匹配的静态资源
// 中间件优先于所有接口之前执行
app.use(express.static(path.resolve(__dirname, "./public")))
 
// 配置路由
app.get("/", (req, res) => {
    /* 
        希望用户返回根目录时，可以给用户返回一个网页
    */
 
    res.send("怎么办呢？")
 
    // res.send(`
    // <!doctype html>
    // <html>
    //     <head>
    //         <meta charset="utf-8">
    //         <title>这是一个网页</title>
    //     </head>
    //     <body>
    //         <h1>这是网页的标题</h1>
    //     </body>
    // </html>
    // `)
})
 
app.get("/login", (req, res) => {
    // 获取到用户输入的用户名和密码
    // req.query 表示查询字符串中的请求参数
    // console.log(req.query.username)
    // console.log(req.query.password)
    console.log("请求已经收到~~")
 
    // 验证用户输入的用户名和密码是否正确
    if(req.query.username === "sunwukong" && req.query.password === "123123"){
        res.send("<h1>登录成功！</h1>")
    }else{
        res.send("<h1>用户名或密码错误！</h1>")
    }
 
})
 
// 启动服务器
app.listen(3000, () => {
    console.log("服务器已起动~")
})
