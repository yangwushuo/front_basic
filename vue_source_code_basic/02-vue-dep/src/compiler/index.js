import {
  parseHTML
} from "./parse";

/* 
  ast树构建思路
    _c 标签 _v 内容 _s 模板语法
  判断是否有孩子树，如果有子递归调用构建 直到没有孩子树则返回
*/

const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g; // {{ asdsadsa }}  匹配到的内容就是我们表达式的变量
function gen(node) {
  if (node.type === 1) {
    // 标签节点
    return codegen(node)
  } else {
    // 文本节点
    let text = node.text
    if (!defaultTagRE.test(text)) { // 判断是否为{{xxxx}} 模板标识符
      return `_v(${JSON.stringify(text)})`
    } else {
      // _v(_s(name)+'hello'+_s(age))
      let tokens = []
      let match
      let lastIndex = 0
      defaultTagRE.lastIndex = 0 // 重置正则索引位置
      while (match = defaultTagRE.exec(text)) { // 如果 match有值
        let index = match.index // 匹配开始的索引下标记 {{name}} hello {{age}} hello
        if (index > lastIndex) { // 如果当前下标大于上一个下表说明中间夹杂着字面量值
          // 将字面量添加到token中
          tokens.push(JSON.stringify(text.slice(lastIndex, index)))
        }
        // 将匹配到的模板标识添加到tokens中
        tokens.push(`_s(${match[1].trim()})`)
        lastIndex = index + match[0].length // 更新最新索引值
      }
      // 判断如果出现这种情况 {{name}} hello 需要单独处理
      if (lastIndex < text.length) {
        tokens.push(JSON.stringify(text.slice(lastIndex)))
      }

      return `_v(${tokens.join('+')})` // {{name}}+hello+{{age}}+hello
    }
  }
}

function genProps(attrs) {

  /*
    attrs参数: [{name:id, value:app },{name:style, value:color:red;background-color:red }]
    预期结果: {id:"app",style:{"color":"red"}}
  */

  let str = '' // {name, value}
  for (let i = 0; i < attrs.length; i++) {
    let attr = attrs[i]
    // 判断如果是style内联样式则单独处理
    if (attr.name === 'style') {
      // color:red;background-color:red => {color: 'red', background-color: 'red' }
      let obj = {}
      attr.value.split(';').forEach(item => {
        let [key, value] = item.split(':')
        value && (obj[key] = value.trim())
      });
      attr.value = obj
    }
    str += `${attr.name}:${JSON.stringify(attr.value)},`
  }
  return `{${str.slice(0,-1)}}` // 去掉结尾逗号
}

function genChildren(children) {
  return children.map(child => gen(child)).join(',')
}

function codegen(ast) {
  let children = genChildren(ast.children)
  let tag = ast.tag
  let attrs = ast.attrs.length ? genProps(ast.attrs) : 'null'
  let tagChildren = ast.children.length ? `,${children}` : ''
  let code = (
    `_c('${tag}', 
    ${attrs}
    ${tagChildren}
    )`
  )
  return code
}

export function complieToFunction(html) {

  // 1.就是将template 转换成ast语法树
  let ast = parseHTML(html)
  console.log(ast)

  // 2.生成render (render 方法执行后的返回的结果就是 虚拟DOM)
  // 模板引擎的实现原理就是 with + new Function
  let code = codegen(ast)
  code = `with(this){return ${code}}` // 使用with 那么函数体内的name.age 等对象属性都会去this中寻找 
  let render = new Function(code) // 根据代码生成render函数

  //  _c('div',{id:'app'},_c('div',{style:{color:'red'}},  _v(_s(vm.name)+'hello'),_c('span',undefined,  _v(_s(age))))
  console.log(render);
  return render

}  