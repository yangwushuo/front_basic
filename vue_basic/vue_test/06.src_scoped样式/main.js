import Vue from 'vue'
import App from './App.vue'
//引入插件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
