//引入的不再是Vue构造函数 例如: import Vue from 'vue'; 这里引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象---app(类似于之前Vue2中的vm，但app比vm更"轻”)
createApp(App).mount('#app')
