import Vue from 'vue'
import App from './App.vue'
//引入插件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this; //安装全局事件总线
  }
}).$mount('#app')
