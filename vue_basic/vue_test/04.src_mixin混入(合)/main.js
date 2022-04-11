import Vue from 'vue'
import App from './App.vue'
import {hunhe1,hunhe2} from './mixin'

Vue.config.productionTip = false

//如果配置全局混合，那么所有的组件都可以使用，vm vc都可以使用
Vue.mixin(hunhe1)
Vue.mixin(hunhe2)

new Vue({
  render: h => h(App),
}).$mount('#app')
