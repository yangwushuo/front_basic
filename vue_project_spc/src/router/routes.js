
//组件导入
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'

export default [
  //home路由
  {
    name: 'home',
    path: '/home',
    component: Home,
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