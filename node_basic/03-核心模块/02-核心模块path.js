/*

  path
    - 表示的路径
    - 通过path可以用来获取各种路径
    - 要使用path， 需要先对其进行引入
    - 方法:
      path.resolve([...paths])
        - 用来生成一个绝对路径
            相对路径: ./xxx ../xxx  xxxx
            绝对路径: 
                - 在计算机本地
                    C:\xxx
                    /User/xxx
                - 在网络中
                    http://www.xxxx/...
                    https://www.xxxx/...

            - 如果直接调用resolve，则返回当前的工作目录
                C:\Program Files\nodejs\node.exe .\03_包管理器\01_path.js
                C:\Users\lilichao\Desktop\Node-Course

                node .\01_path.js
                C:\Users\lilichao\Desktop\Node-Course\03_包管理器
                - 注意，我们通过不同的方式执行代码时，它的工作目录是有可能发生变化的

            - 如果将一个相对路径作为参数
                则resolve会自动将其转换为绝对路径
                此时根据工作目录的不同，它所产生的绝对路径也不同

            - 一般会将一个绝对路径作为一个参数，
                一个相对路径作为第二个参数
                这样他会自动计算出最终的路径


*/

const path = require("node:path")

// const result = path.resolve()

// c:\Users\lilichao\Desktop\Node-Course\hello.js
// const result = path.resolve("./hello.js")
// const result = path.resolve(
//     "C:\\Users\\lilichao\\Desktop\\Node-Course\\03_包管理器",
//     "../../hello.js")


//最终形态
//以后在使用路径时，尽量通过path.resolve()来生成路径
const result = path.resolve(__dirname, "./hello.js")
//console.log(result)

