// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//导入自定义组件
import About from '../page/About.vue';
import Home from '../page/Home.vue';
import Message from '../page/Message.vue';
import News from '../page/News.vue';
import Detail from '../page/Detail.vue';

//创建一个暴露的路由
export default new VueRouter({
    routes:[
        //指定路由与对应的组件
        {   
            //name 为当前路径添加命名路由
            name: 'about',
            path: '/about',
            component: About,
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            //如果一级路径中还附带一些子路径，则使用children进行嵌套
            //注意：子路径中path不用再添加/斜杠，vue-router会自己添加一个/在path之前
            children:[
				{
                    name: 'news',
					path:'news',
					component: News,
				},
				{
                    name: 'message',
					path:'message',
					component: Message,
                    children:[
						{
                            name: 'detail',
                            // 指定params参数的占位
							path:'detail/:id/:title',
							component: Detail,

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
})