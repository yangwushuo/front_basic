// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//导入自定义组件
import About from '../page/About.vue';
import Home from '../page/Home.vue';
import Message from '../page/Message.vue';
import News from '../page/News.vue';

//创建一个暴露的路由
export default new VueRouter({
    routes:[
        //指定路由与对应的组件
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            //如果一级路径中还附带一些子路径，则使用children进行嵌套
            //注意：子路径中path不用再添加/斜杠，vue-router会自己添加一个/在path之前
            children:[
				{
					path:'news',
					component: News,
				},
				{
					path:'message',
					component: Message,
				}
			]
        }
    ]
})