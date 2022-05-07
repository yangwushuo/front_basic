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
//分页器
import Pagination from '@/components/Pagination';
Vue.component(Pagination.name,Pagination)
//element-ui
import {Button,MessageBox} from 'element-ui';
Vue.component(Button.name, Button)
//组件注册在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//使用vuex 
import store from '@/store/index';
//使用mock
import '@/mock/mockServe';

//引入swiper样式
import 'swiper/css/swiper.css';

//引入api
import * as API from '@/api/index'

new Vue({
  render: h => h(App),  
  //配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由信息: 当这里书写router的时候，组件身上都用有$route $router属性
  router,
  //注册仓库: 组件实例的身上会多个一个属性$store属性
  store
}).$mount('#app')
