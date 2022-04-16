<template>
  <div>
      <h1>当前求和为:{{sum}}</h1>
      <h2>放大10倍:{{bigSum}}</h2>
      <h3>学校:{{school}}</h3>
      <h3>学科:{{subject}}</h3>
      <select v-model="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
//导入mapState mapGetters
import {mapState,mapGetters} from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n:1, //用户选择的数字
        }
    },
    methods: {
        /* 使用 vuex功能第一个值必须是指定的key  第二个才是传入参数*/
        increment(){
            //不需要各种复杂逻辑判读或操作，直接调用mutations进行计算
            this.$store.commit('AddSum',this.n)
        },
        decrement(){
            this.$store.commit('ReduceSum',this.n)
        },
        incrementOdd(){
            //将判断奇数逻辑放入actions中处理
            this.$store.dispatch('addSumOdd',this.n)
        },
        incrementWait(){
            //将定时器放入actions中处理
            this.$store.dispatch('addSum',this.n)
        },
    },
    computed: {
        //靠程序员自己亲自去写计算属性
        /* sum(){
            return this.$store.state.sum
        },
        school(){
            return this.$store.state.school
        },
        subject(){
            return this.$store.state.subject
        }, */
        //使用mapState生成 key就是生成的函数名字 value则是对应的state变量 (对象方式)
        //使用mapState生成的是一个包含多个可以调用state的函数的对象，使用...方式将对象中的数组添加到计算属性中
        ...mapState({sum:'sum', school:'school', subject:'subject'}),
        //如果key和value名字相同可以使用简写方式 (数组方式)
        // ...mapState(['sum','school','subject'])


        //原始方式使用getters
        /* bigSum(){
            return this.$store.getters.bigSum
        }, */
        //使用mapGetters方式生成 (对象方式)
        ...mapGetters({bigSum:'bigSum'})
        //简写形式 (数组方式)
        // ...mapGetters(['bigSum'])
    },
    mounted() {
        const x = mapState({sum:'sum', school:'school', subject:'subject'});
        console.log(x);
    },
}
</script>

<style lang="css">
button{
    margin-left: 5px;
}
</style>