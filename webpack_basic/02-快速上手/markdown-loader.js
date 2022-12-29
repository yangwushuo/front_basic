const marked = require('marked');
module.exports = source => {

  // 自定义markdown的加载器 source作为输入源
  // source就是webpack在检测到对应的文件时候读取到文件内的数据，传递到加载器中进行相应处理
  console.log("这是输入源的数据:",source);
  //marked函数将markdown中的数据转为相应的html代码
  const html = marked(source);

  //记载其必须以js代码字符串进行返回,如果不以js代码的方式返回，则视为将要传递给下一个loader的数据
  //可以理解为管道，source是数据进行处理，返回值是给下一个loader的使用，如果没有下一个loader则视为加载完毕
  //例如: return  "console.log(xxx)";
  
  return `module.exports = ${JSON.stringify(html)}`

}