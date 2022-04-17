// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//导入自定义组件
import About from '../page/About.vue';
import Home from '../page/Home.vue';
import Message from '../page/Message.vue';
import News from '../page/News.vue';
import Detail from '../page/Detail.vue';

//创建一个暴露的路由
const r =  new VueRouter({
    routes:[
        //指定路由与对应的组件
        {   
            //name 为当前路径添加命名路由
            name: 'about',
            path: '/about',
            component: About,
            //meta属性供程序员添加自定义键值对
            meta: {
                title: '大概'
            }
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            //如果一级路径中还附带一些子路径，则使用children进行嵌套
            //注意：子路径中path不用再添加/斜杠，vue-router会自己添加一个/在path之前
            children:[
				{
                    name: 'news',
					path:'news',
					component: News,
                    meta: {
                        title: '新闻',
                        isAuth: true
                    }
				},
				{
                    name: 'message',
					path:'message',
					component: Message,
                    meta: {
                        title: '消息',
                        isAuth: true
                    },
                    children:[
						{
                            name: 'detail',
                            // 指定params参数的占位
							path:'detail/:id/:title',
							component: Detail,
                            meta: {
                                title: '详情',
                                isAuth: true
                            },
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props形式传给Detail组件。
                            //props:{a:1,b:'hello'}

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            //props: true

                            //props的第三种写法，值为函数 vue-router会自动为该函数传递一个参数$router 可以使用{query} {params}直接获取对应参数
                            //如果是qurey这种形式也可以只需要改一下形参就可以获取对应的数值
                            props: function({params}){
                                console.log('正在获取数据',params);
                                return {
                                    id: params.id,
                                    title: params.title,
                                }
                            }
						} 
					]
				}
			]
        }
    ]
});

//路由守卫
/* 
    简单的说，导航守卫就是路由跳转过程中的一些钩子函数。
    路由跳转是一个大的过程，这个大的过程分为跳转前中后等等细小的过程，
    在每一个过程中都有一函数，这个函数能让你操作一些其他的事儿的时机，这就是导航守卫。
*/
//跳转前 三个参数 to 去哪 from 来自哪里 next跳转的方法
r.beforeEach((to, from, next) => {
    console.log("跳转前");
    //判断跳转的路径是否需要权限
    if(to.meta.isAuth){
        //判断名字
        if(localStorage.getItem('name') == 'jason'){
            //进行跳转
            next();
        }else{
            alert(localStorage.getItem("name")+"您的权限不够!");
        }
    }else{
        //不需要授权直接跳转
        next();
    }
    
})

//跳转后 两个参数 to 去哪 from 来自哪里
r.afterEach((to, from) => {
    console.log("跳转后");
    //如果跳转成功就把标题换成路由中配置的标题
    document.title = to.meta.title;
})

export default r;