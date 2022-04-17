//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter插件路由
import VueRouter from 'vue-router'
//引入路由
import router from './router/index'
//关闭Vue的生产提示
Vue.config.productionTip = false

//使用vue-router插件
Vue.use(VueRouter)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router,
})