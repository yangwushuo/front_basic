//引用vue-router
import VueRouter from 'vue-router'
//引用vue
import Vue from 'vue'
//安装路由插件
Vue.use(VueRouter)

//配置组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//先把VueRouter原型对象的push与replace保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push || replace
//第一个参数: 告诉原来push方法，你往哪里跳转(传递哪些参数)
//第二个参数: 成功回调
//第三个参数: 失败回调
//call apply区别
//相同点，都可以调用函数一次，都可以篡改函数的上下文一次
//不同点，call与apply传递参数: call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function(location, resolve, reject){
  //如果resolve reject有回调函数则直接使用
  if(resolve || reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,
      () => {
        //成功回到函数
        
      },
      () => {
        //失败回调函数
      })
  }
}

VueRouter.prototype.replace = function(location, resolve, reject){
  //如果resolve reject有回调函数则直接使用
  if(resolve || reject){  
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,
      () => {
        //成功回到函数
      },
      () => {
        //失败回调函数
      })
  }
}


//暴露路由出去
export default new VueRouter({
  routes:[
    //home路由
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta:{
        show: true,
      },
    },
    //login路由
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta:{
        show: false,
      },
    },
    //register路由
    {
      name: 'register',
      path: '/register',
      component: Register,
      meta:{
        show: false,
      },
    },
    //Search路由
    {
      name: 'search',
      //添加param添加问号代表可传可不传
      path: '/search/:keyword?',
      component: Search,
      meta:{
        show: true,
      },
    },
    //重定向，在项目跑起来的时候，访问/
    {
      path: '*',
      redirect: '/home'
    }
  ]
})