import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//获取路由
import router from '@/router/'

//注册全局组件 三级菜单
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
