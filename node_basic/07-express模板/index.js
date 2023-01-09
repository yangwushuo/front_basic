const express = require("express")
const path = require("path")
const app = express()
 
const STUDENT_ARR = [
    {
        name: "孙悟空",
        age: 18,
        gender: "男",
        address: "火锅山"
    },
    {
        name: "猪八戒",
        age: 28,
        gender: "男",
        address: "高老庄"
    },
    {
        name: "沙和尚",
        age: 38,
        gender: "男",
        address: "流沙河"
    }
]

// 将 ejs设置为默认的模板引擎
app.set("view engine","ejs")
// 配置模板的路径
app.set("views", path.resolve(__dirname, "./views"))

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, "./public")))
// 配置请求体解析
app.use(express.urlencoded({extended: true}))

app.get("/hello", (req, res) => {
  res.send("hello")
})

app.get("/students", (req, res) => {
  /*

    希望用户在访问student路由时，可以给用户返回一个显示有学生信息的页面
    html页面属于静态页面，创建的时候什么样子，用户看到的就是什么样子
      不会自动跟随服务器中数据的变化而变化

    希望有这么一个东西，他长得像个网页，但是它里面可以嵌入变量，
      这个东西在node中被称为 模板

    在node中存在很多个模板 都各具特色的 ejs

    ejs是node中一款模板引擎，使用步骤:
      1. 安装ejs
      2. 配置express的模板引擎为ejs
          app.set("view engine", "ejs")
      3. 配置模板路径
          app.set("views", path.resolve(__dirname, "views"))

        注意， 模板引擎需要被express渲染后才能使用

    使用 res.render() 用来渲染一个模板引擎，并将其返回给浏览器
    可以将一个对象作为render的第二个参数传递，这样在模板中可以访问到对象中的数据
    res.render("students", { name: "yangwushuo", age: 23, gender: "男" })
    <%= %>在ejs中输出内容时，他会自动对字符串中的特殊符号进行转义 输出都为字符串
    这个设计是为了避免xss(跨站脚本攻击)攻击
    如果使用 <%- %> 直接将内容输出
    <% %> 可以在其中直接编写js代码，js代码会在服务器中执行

    xss举例子：
      不要相信用户给你的数据都是正常的 如果使用<%- %>这样渲染，用户插入数据为js代码 <script>alert(1)</script>
      那这样会修改页面到时每次打开此页面都会弹出提示框， 如果为其他js代码则会更危险
      使用<%= %>则会直接将其转为原字符串模式渲染

  */
  res.render("students", {name: '杨武硕', age: 23, gender: '男'})

})

// 最后配置一个路由报错中间件
app.use((req, res) => {
  // 只要这个中间件执行，说明它上边的地址都没有执行，没有匹配
  res.status(400)
  res.send("<h1>您访问的地址已被外星人劫持!!!</h1>")
})

app.listen(3000, () => {
  console.log("开启服务~");
})