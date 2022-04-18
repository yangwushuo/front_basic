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
                isAuth: true,
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
            children:[
				{
                    name: 'news',
					path:'news',
					component: News,
                    meta: {
                        title: '新闻',
                        isAuth: true
                    },
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

//跳转后 两个参数 to 去哪 from 来自哪里
r.afterEach((to, from) => {
    console.log("跳转后");
    //如果跳转成功就把标题换成路由中配置的标题
    document.title = to.meta.title;
})

export default r;