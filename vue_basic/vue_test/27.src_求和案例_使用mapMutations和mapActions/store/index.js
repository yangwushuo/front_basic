//该文件哟关于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'

import Vue from 'vue'
//注意 必须在引入store之前就将Vuex注册到插件中 不然会出现报错
Vue.use(Vuex)

//准备actions 用于响应组件中的动作，就是在数值没有被处理之前做一些常用的逻辑判断或者网络请求，相当于做菜前的食材配置
const actions = {
    /* 
        注册各种被调用的函数
        context是store上下文提供commit disptch等常用方法
        value是外面出入过来的值
        使用commit去调用mutations
    */
   //addSum reduceSum中没有复杂的逻辑判断可以在外部直接使用commit而不是dispatch
    /* addSum(context, value){
        context.commit('AddSum', value);
    },
    reduceSum(context, value){
        context.commit('ReduceSum', value);
    }, */
    addSumOdd(context, value){
        if(context.state.sum % 2){
           context.commit('AddSum', value); 
        }
    },
    addSumWait(context, value){
        setTimeout(() => {
          context.commit('AddSum', value);  
        },1000)
    }
}
//准备mutations 用于操作数据(state) 进行计算 相当于做菜时的各种烹炒
//一般不需要使用actions进行各种逻辑处理的时候，可以直接调用commit使用mutation中的方法
const mutations = {
    /* 
        state可以访问到state中的各种数值
        value是传入过来的值
    */
    AddSum(state, value){
        state.sum += value
    },
    ReduceSum(state, value){
        state.sum -= value
    }
}

//准备state 用于存储数据
const state = {
    sum: 0,
    school: '南京大学',
    subject: '软件工程'
}

//如果对数据需要做一些计算处理可以使用getters不会影响到state里面的真实数值
const getters = {
    bigSum(state){
        return state.sum*10;
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})