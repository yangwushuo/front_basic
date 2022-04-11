import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* 
  关于不同版本的Vue:
    1.Vue.js与vue.runtime.xxx.js的区别
      (1).vue.js是完整版的Vue，包好:核心功能+模板解析器
      (2).vue.runtime.xxx.js是运行版的Vue，只包含:核心功能；没有模板解析器
    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容

*/

new Vue({
  /* 
    我们使用的是没有模板解析器的vue.js所以没有模板解析器，需要使用render创建一个元素
  */
  render: h => h(App),
  /* 
    render(createElement){
      return createElement('xxx标签名','添加的内容');
    }
  */
}).$mount('#app')
