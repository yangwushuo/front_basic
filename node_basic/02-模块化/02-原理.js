/*

  所有的CommonJS的模块都会被包装到一个函数中
    (function(exports, require, module, __filename, __dirname){
      //模块代码会被放到这里进行包装
    })

*/

let a = 10
let b = 20

//console.log(__filename) // __filename表示当前模块的绝对路径

console.log(__dirname); //当前模块所在的文件夹路径