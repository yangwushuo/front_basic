const express = require('express')
const path = require('path')
const app = express()

const studentRoute = require('./routes/student');

app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))

// 配置路由 第一个参数是基础路由 用户访问/student/info 就会进入到该路由寻找 info子路由
app.use('/student', studentRoute);

app.listen(3000, () => {
  console.log('开启服务成功~');
})