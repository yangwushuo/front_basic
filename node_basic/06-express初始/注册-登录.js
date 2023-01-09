const express = require("express")
const app = express()
const path = require("path")
 
// 创建一个数组来存储用户信息
const USERS = [
    {
        username: "admin",
        password: "123123",
        nickname: "超级管理员"
    },
    {
        username: "sunwukong",
        password: "123456",
        nickname: "齐天大圣"
    }
]

// 配置静态资源的路径
// public http://localhost:3000/
app.use(express.static(path.resolve(__dirname, "public")))
// 引入解析请求体的中间件
app.use(express.urlencoded())

app.post('/login', (req, res) => {
  const {username, password} = req.body;

  // 获取到用户的用户名和密码后，需要根据用户名去用户的数组中查找用户
  const loginUser = USERS.find((item) => {
    return item.username === username && item.password === password;
  })

  if(loginUser){
    res.send(`<h1>登录成功 ${loginUser.username}</h1>`)
  }else{
    res.send('<h1>用户或密码错误</h1>')
  }

})

app.post('/register', (req, res) => {
  // 获取用户输入的数据
  // console.log()
  const {username, password, rePwd, nickname} = req.body;

  // console.log(username, password, repwd, nickname)
  // 验证这些数据是否正确，略...
  // 只验证用户是否存在
  const user = USERS.find((item) => {
    return item.username === username || item.nickname === nickname;
  })

  if(!user){
    // 进入判断说明用户不存在，可以注册
    USERS.push({
      username,
      rePwd,
      nickname
    })

    res.send(`<h1>恭喜您! 注册成功！</h1>`);
  }else{
    res.send('<h1>用户名已存在！</h1>')
  }
})
 
app.listen(3000, () => {
  console.log("服务器已经启动~")
})
 