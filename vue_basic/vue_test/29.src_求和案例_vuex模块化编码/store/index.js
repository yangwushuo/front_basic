//该文件哟关于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'

import Vue from 'vue'
import CountOptions from './count'
import PersonOptions from './person'
//注意 必须在引入store之前就将Vuex注册到插件中 不然会出现报错
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules:{
        //模块名: 导入的模块 如果指定模块名字，必须在模块内开启命名空间 namespaced: true
        countAbout: CountOptions,
        personAbout: PersonOptions
    }
})