//可以把多个组件共用的配置提取成一个混入对象

export const hunhe1 = {
    //提取data数据 如果组件内也有data则进行合并，相同属性以内部为主
    data() {
        return {
            msg: '这是一则信息'
        }
    },
    methods: {
        showName(){
            alert(this.name);
        }
    },
    //注意，如果自建内部也有生命周期钩子函数那么全部执行，外部优先
    mounted() {
        console.log("这是外部生命周期回调函数mounted");
    },
}

export const hunhe2 = {
    methods: {
        
    },
    mounted() {
        
    },
}