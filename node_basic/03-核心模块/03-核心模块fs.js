/*

  fs(File System)
    - fs用来帮助node来操作磁盘中的文件
    - 文件操作也就是所谓的I/O input output
    - 使用fs模块，同样需要引入

*/
/*
    fs.readFile() 读取文件
    fs.appendFile() 创建新文件，或将数据添加到已有文件中
    fs.mkdir() 创建目录
    fs.rmdir() 删除目录
    fs.rm() 删除文件
    fs.rename() 重命名 (剪切)
    fs.copyFile() 复制文件（复制）
*/
 
const fs = require("node:fs/promises");
const { resolve } = require("node:path");
const path = require("node:path")

// readFile 方法使用
// Promise版本的fs的方法
fs.readFile(path.resolve(__dirname, "./hello.txt"))
  .then(buffer => {
    console.log("读取成功1");
    console.log(buffer.toString());
  })
  .catch(e => {
    console.log("出错了~");
  })

//
; (async () => {
  try {
    const buffer = await fs.readFile(path.resolve(__dirname,"./hello.txt"))
    console.log("读取成功2");
    console.log(buffer.toString());
  } catch (error) {
    console.log("出错了~");
  }
})()

// readFileSync() 同步的读取文件的方法，会阻塞后面代码的执行
// 当我们通过fs模块读取磁盘中的数据时，读取到的数据总会以Buffer对象的额形式返回
// Buffer是一个临时用来存储数据的缓冲区
// const buf = fs.readFileSync(path.resolve(__dirname, "./hello.txt"))
// console.log(buf.toString())

//readFile() 异步的读取文件的方法  此readFile() 并非node:fs/promise模块而是 node:fs 下使用
// fs.readFile(
//   path.resolve(__dirname, "./hello.txt"),
//   (err, buffer) => {
//     if(err){
//       console.log("出错了~");
//     }else{
//       console.log(buffer.toString())
//     }
//   }
// )

// appendFile 方法
fs.appendFile(
  path.resolve(__dirname, "./hello.txt"),
  "这小子真帅啊"
).then(res => {
  console.log("添加成功");
})

// 拷贝练习
fs.readFile( 
  path.resolve(__dirname,'./pic.png')
).then(buffer=>{
  return fs.appendFile(path.resolve(__dirname,'./pic1.png'),buffer)
}).then(res => {
  console.log("拷贝成功",res);
})

//mkdir 方法  recursive开启多层级创建
fs.mkdir(path.resolve(__dirname, "./hello/abc"), { recursive: true })
  .then(r => {
    console.log("操作成功");
  })
  .catch(err => {
    console.log("创建失败",err);
  })

//rm 删除方法 recursive开启多层级删除
fs.rm(path.resolve(__dirname, "./hello/abc"),{ recursive: true })
  .then(res => {
    console.log("删除成功");
  })

//rename 方法 剪切功能
fs.rename(path.resolve(__dirname, "./hello.txt"), path.resolve(__dirname, "./hello1.txt"))
  .then(res => {
    console.log("重命名成功");
  })

//rename 剪切功能
fs.rename(path.resolve(__dirname, "./hello.txt"), path.resolve(__dirname, "../hello1.txt"))
.then(res => {
  console.log("重命名成功");
})

fs.copyFile(path.resolve(__dirname, "./pic.png"),path.resolve(__dirname,"./pic2.png"))
  .then(res => {
    console.log("拷贝成功");
  })





