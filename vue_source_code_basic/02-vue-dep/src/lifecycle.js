import { createElementVNode, createTextVNode } from "./vdom/index"
import Watcher from './observe/watcher'

/*
  思路： 
    对ast树进行拼接的到 _c('xx',{},_c('xx',null,_v(_s({{name}})))) 字符串
    使用white + new Function 将字符串用于代码
    申明_c _v 原型函数用于创建vnode节点 ，这里的vnode节点附带子孙关系 
    将最外层vnode进行element元素创建 替换掉页面html中指定的element旧元素
*/

function patchProps(el, props){ // 元素添加属性
  
  for (let key in props) {
    if(key === 'style'){
      for(let styleName in props.style){
        el.style[styleName] = props.style[styleName] 
      }
    }else{
      el.setAttribute(key, props[key])
    }
  }

}

function createElm(vnode) { 
  let { tag, data, children, text } = vnode
  if(typeof tag === 'string'){
    vnode.el = document.createElement(tag) // 这里将真实的节点和虚拟的节点对应起来， 后续如果修改属性了
    patchProps(vnode.el, data) // 添加相应的属性
    children.forEach(child => {
      vnode.el.appendChild(createElm(child)) // 元素添加子元素 child元素也是一个vnode
    })
  }else{
    // 文本
    vnode.el = document.createTextNode(text)
  }

  return vnode.el
}

// 功能: 根据vnode创建element
function patch(oldVNode, vnode){
  // 写的式初渲染流程
  console.log(oldVNode,vnode);

  const isRealElement = oldVNode.nodeType // 判断老元素是否存在
  if(isRealElement){ // 存在则创建新元素替换老元素
    const elm = oldVNode // 获取真实元素
    const parentElm = elm.parentNode // 拿到父元素
    let newElm = createElm(vnode) // 创建最终元素
    // Node.nextSibling 是一个只读属性，返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null。
    // insertBefore() 方法可在已有的子节点前插入一个新的子节点。
    parentElm.insertBefore(newElm, elm.nextSibling) // 将最新元素插入老元素下面一个元素之前
    parentElm.removeChild(elm) // 删除老元素

    return newElm
  }else{

  }
}

export function initLiftCycle(Vue){
  Vue.prototype._update = function(vnode){ // 将vnode转化成真实dom
    const vm = this
    const el = vm.$el

    // patch即有初始化的功能 又有更新的功能
    console.log("vnode结果:",vnode);
    vm.$el = patch(el, vnode)
  }
  Vue.prototype._c = function(){
    return createElementVNode(this, ...arguments)
  }
  Vue.prototype._v = function(){  
    return createTextVNode(this, ...arguments)
  }
  Vue.prototype._s = function(value){
    if(typeof value !== 'object') return value
    return JSON.stringify(value)
  }
  Vue.prototype._render = function(){
    // 当渲染的时候会去实例中取值， 我们就可以将属性和视图绑定在一起
    return this.$options.render.call(this) // 通过ast语法转移后生成的render方法
  }
}

export function mountComponent(vm, el){ // 这里的el 是通过querySelector处理过的
  vm.$el = el

  // 1.调用render方法产生虚拟节点 虚拟DOM
  const updateComponent = () => {
    vm._update(vm._render()) // vm.$options.render() 虚拟节点
  }
  const watcher = new Watcher(vm, updateComponent, true)
  // 2.根据虚拟DOM产生真实DOM

  // 3.插入到el元素中
}

/*
  vue核心流程 
    1. 创造了响应式数据
    2. 模板转换成ast语法树
    3. 将ast语法树转换了render函数
    4. 后续每次数据更新可以只执行render函数(无需再次执行ast转换的过程)
        render函数会去产生虚拟节点(使用响应式数据)
        根据生成的虚拟节点创造真实的DOM
*/