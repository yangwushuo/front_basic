<template>
  <div>
      <h1>当前求和为:{{$store.state.sum}}</h1>
      <h2>放大10倍:{{$store.getters.bigSum}}</h2>
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
}
</script>

<style lang="css">
button{
    margin-left: 5px;
}
</style>