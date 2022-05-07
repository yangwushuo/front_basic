
//组件导入
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'

export default [
  //home路由
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta:{
      //是否展示下框
      show: true,
    },
  },
  //购物车
  {
    name: 'shopcart',
    path: '/shopcart',
    component: ShopCart,
    meta:{
      show: true,
    },
  },
  //支付
  {
    name: 'pay',
    path: '/pay',
    component: Pay,
    meta:{
      show: true,
    },
  },
  //交易
  {
    name: 'trade',
    path: '/trade',
    component: Trade,
    meta:{
      show: true,
    },
  },
  //购物详情页
  {
    name: 'addcartsuccess',
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta:{
      show: true,
    },
  },
  //详情页
  {
    name: 'detail',
    path: '/detail/:skuid',
    component: Detail,
    meta:{
      show: false,
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