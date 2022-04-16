//引入Vue
import Vue from 'vue'
//引入store
import store from './store/index'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false


//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	//添加store
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})