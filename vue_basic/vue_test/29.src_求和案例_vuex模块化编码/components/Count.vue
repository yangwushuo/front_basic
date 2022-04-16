<template>
  <div>
      <h1>当前求和为:{{sum}}</h1>
      <h2>放大10倍:{{bigSum}}</h2>
      <h3>学校:{{school}}</h3>
      <h3>学科:{{subject}}</h3>
      <h4 style="color:red">当前人数:{{personList.length}}</h4>
      <select v-model="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="incrementOdd(n)">当前求和为奇数再加</button>
      <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
//导入mapState mapGetters
import {mapState,mapGetters,mapActions, mapMutations} from 'vuex';
export default {
    name: 'Count',
    data() {
        return {
            n:1, //用户选择的数字
        }
    },
    methods: {
        /* 
            因为vuex中几个store是模块化管理，如果需要引入指定的模块，第一个参数必须是指定的模块名
            第二个参数可以是数组或者指定对象
        */
        ...mapMutations('countAbout',{
            increment: 'AddSum',
            decrement: 'ReduceSum'
        }),

        ...mapActions('countAbout',{
            incrementOdd: 'addSumOdd',
            incrementWait: 'addSumWait'
        })
    },
    computed: {
        ...mapState('countAbout',{
            sum:'sum', 
            school:'school',    
            subject:'subject',
        }),
        ...mapState('personAbout',{
            personList: 'personList'
        }),

        ...mapGetters('countAbout',{bigSum:'bigSum'})
    },
    mounted() {
      
    },
}
</script>

<style lang="css">
button{
    margin-left: 5px;
}
</style>