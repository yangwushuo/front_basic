import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

//获取路由
import router from '@/router/';

//注册全局组件 三级菜单
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name, TypeNav)
//轮播图
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)

//使用vuex 
import store from '@/store/index';
//使用mock
import '@/mock/mockServe';

//引入swiper样式
import 'swiper/css/swiper.css';

new Vue({
  render: h => h(App),
  //注册路由信息: 当这里书写router的时候，组件身上都用有$route $router属性
  router,
  //注册仓库: 组件实例的身上会多个一个属性$store属性
  store
}).$mount('#app')
