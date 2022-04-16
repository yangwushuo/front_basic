export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        /* 
            state可以访问到state中的各种数值
            value是传入过来的值
        */
        AddSum(state, value){
            state.sum += value
        },
        ReduceSum(state, value){
            state.sum -= value
        },
        AddPerson(state,value){
            state.personList.unshift(value);
        }
    },
    state: {
        sum: 0,
        school: '南京大学',
        subject: '软件工程',
        personList: [
            {id: '001',name: '王巴丹', age: 20}
        ]
    },
    getters: {
        bigSum(state){
            return state.sum*10;
        }
    }

}