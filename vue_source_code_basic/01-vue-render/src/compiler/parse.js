
/*
  整体模板解析的思路: 
    1. 获取标签字符串
    2. 标签字符串形式如: 
        <div>
          <div>我是一个大帅哥</div>
          <span>{{user.name}}</span>
        </div>
    3. indexOf 获取 < 标识的位置，如果标识的位置为0 则说明遇到的是起始标签或者终止标签
    4. 使用起始标签的正则表达式进行获取 如果获取到数据说明是 起始标签(将当前起始标签进行节点打包start，再从模板字符串中删除)
      如果没有获取到数据说明是 终止标签(对终止标签进行处理end，再次从模板字符串中删除匹配到的终止标签)
    5. 如果索引下表不是0，说明不是起始标签也不是终止标签 那就是标签中的内容 对标签内容进行一次打包chars
      函数说明: 
        createASTElement 创建一个ast树的节点
        start 起始标签的处理
        end 终止标签的处理
        chars 标签内容的处理

      ast树使用说明：使用堆来存放ast树的内容  如图 模板解析ast树图例
*/

const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;
const qnameCapture = `((?:${ncname}\\:)?${ncname})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`); // 他匹配到的分组是一个 标签名  <xxx 匹配到的是开始 标签的名字
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);  // 匹配的是</xxxx>  最终匹配到的分组就是结束标签的名字
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;  // 匹配属性
// 第一个分组就是属性的key value 就是 分组3/分组4/分组五
const startTagClose = /^\s*(\/?)>/;  // <div> <br/>

// vue3 采用的不是使用正则表达式去匹配

// 对模板进行编译处理
export function parseHTML(html){ // html 最开始肯定是一个 <div></div>

  const ELEMENT_TYPE = 1
  const TEXT_TYPE = 3
  const stack = [] // 用于存放元素的
  let currentParent // 指向的是栈中的最后一个
  let root

  // 创建ast树的一个节点
  function createASTElement(tag, attrs){
    return {
      tag,
      attrs,
      type: ELEMENT_TYPE,
      children: [], // 孩子
      parent: null
    }
  }

  // 构建开始标签
  function start(tag, attrs){
    let node = createASTElement(tag, attrs) // 获取一个节点
    if(!root){ // 如果没有根节点则赋值
      root = node
    }
    if(currentParent){ // 如果当前节点已经存在
      // 1.将新节点的父亲设置为当前节点
      node.parent = currentParent
      // 2.将父节点也就是当前节点孩子设置为该新节点
      currentParent.children.push(node)
      
    }
    // 将新节点放入栈中
    stack.push(node)
    // 将当前节点指针修改为最新的节点
    currentParent = node
  }

  // 构建标签内容
  function chars(text){
    text = text.replace(/\s+/g,''); //清除空格
    // 将当前内容节点添加到当前节点指针的孩子队列中
    text && currentParent.children.push({
      text,
      type: TEXT_TYPE,
      parent: currentParent // 内容父节点为最新节点
    })
  }

  // 构建结尾标签
  function end(tag){
    // 如果是最后一个标签则肯定与栈中最新节点匹对
    let node = stack.pop() // 弹出最新节点
    // 将最新节点设置为上一个父节点
    currentParent = stack[stack.length -1]
  }
  
  // 截取模板的字符串
  function advance(n){
    html = html.substring(n)
  }

  // 解析标签开头
  function parseStartTag(){
    const start = html.match(startTagOpen) // 解析起始标签获取标签名与标签属性
    if(start){
      const match = {
        tagName: start[1], // 标签名
        attrs: []
      }
      advance(start[0].length) // 截取html字符串
      // 如果不是开始的标签的结束 就一直匹配下去
      let attr, end // attr 标签中的属性 end 标签的结尾 >
      // 如果匹配到标签结尾则结束循环 功能: 获取标签中的属性
      while(!(end = html.match(startTagClose)) && (attr = html.match(attribute))){
        advance(attr[0].length)
        match.attrs.push({ 
          name: attr[1], 
          value: attr[3] || attr[4] || attr[5] || true
        })
      }
      // end 标签的结尾 > 
      if(end){
        // 截取最后的结尾标识 >
        advance(end[0].length)
      }

      // 返回结果
      return match
    }

    // 没有匹配到
    return false
  }

  // 循环html字符串
  while (html) {
    // 如果textEnd 为0 说明是一个开始标签或者结束标签
    // 如果textEnd > 0 说明就是文本的结束位置
    let textEnd = html.indexOf('<') // 如果indexOf中的索引是0 则说明是个标签(开始与结束的标签)
    if(textEnd == 0){

      const startTagMatch = parseStartTag() // 开始标签的匹配结果
      if(startTagMatch){ // 解析到的开始标签
        start(startTagMatch.tagName, startTagMatch.attrs)
        continue
      }

      let endTagMatch = html.match(endTag) // 结束标签的匹配结果
      if(endTagMatch){
        advance(endTagMatch[0].length)
        end(endTagMatch[1])
        continue
      }

    }
    // 如果 < 下标不为0说明有内容
    if(textEnd > 0){
      let text = html.substring(0, textEnd) // 直接提取文本内容
      if(text){ // 如果有文本则执行次操作
        chars(text)
        advance(text.length) // 解析到的文本
      }
    }
  }

  return root

}