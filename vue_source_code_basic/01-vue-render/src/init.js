import initState from "./state"
import {complieToFunction}  from "./compiler/index"
import { mountComponent } from "./lifecycle"

export function initMixin(Vue){ // 就是给Vue增加init方法的
  Vue.prototype.__init = function(options){ // 用于初始化操作
    // vue vm.$options 就是获取用户的配置
    // 我们使用的vue的时候 $nextTick $data $attr ...
    const vm = this
    vm.$options = options // 将用户的选项挂载到实例上
    // 初始化状态
    initState(vm)

    // 模板解析
    if(options.el){
      vm.$mount(options.el) // 实现数据的挂载
    }

  }
  Vue.prototype.$mount = function(el){
    const vm = this
    el = document.querySelector(el)
    let ops = vm.$options
    if(!ops.render){ // 先进行查找有没有render函数
      let template // 没有render看一下是否写了template 没写template采用外部的template
      if (!ops.template && el) { // 没有写模板 但是写了el
        template = el.outerHTML
      }else{
        // 如果有templates属性则使用template属性 
        if(el){
          template = ops.template // 如果有el则采用模板的内容
        }
      }
      // 写了template就用写了的tempalte
      if(template && el){
        // 这里需要对模板进行编译
        const render = complieToFunction(template)
        ops.render = render // jsx 最终会被编译成功h('xxx')
      }
    }

    mountComponent(vm, el) // 组件的挂载
    
  }
}
