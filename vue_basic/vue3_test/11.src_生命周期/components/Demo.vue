<template>
  <h1>sum:{{sum}}</h1>
  <button @click="sumAdd">sum自增</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
  } from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup(props, context) {

    //基本类型
    var sum = ref(0);

    function sumAdd(){
      sum.value++;
    }

    //通过组合式API的形式去使用生命周期钩子
    //组合api形式没有beforeCreate和created这两个生命周期，因为setup执行在他们之前 
    //组合api优先及由于setup外配置的生命周期
    //onBeforeMount => beforeMount
    onBeforeMount(()=>{
      console.log('---创建完毕前---')
    });
    //onMounted => mounted
    onMounted(()=>{
      console.log('---创建完毕后---')
    });
    //onBeforeUpdate => beforeUpdate
    onBeforeUpdate(()=>{
      console.log('---更新前---')
    });
    //onUpdated => updated
    onUpdated(()=>{
      console.log('---更新后---')
    });
    //onBeforeUnmount => beforeUnmount
    onBeforeUnmount(()=>{
      console.log('---卸载前---')
    });
    //onUnmounted => unmounted
    onUnmounted(()=>{
      console.log('---卸载后---')
    });

    return {
      sum,
      sumAdd,
    }
  },
  //生命周期
  //#region
  /* beforeCreate() {
    console.log("-----初始化前-----");
  },
  created() {
    console.log("-----初始化后-----");
  },
  beforeMount() {
    console.log("-----创建完毕前-----");
  },
  mounted() {
    console.log("-----创建完毕后-----");
  },
  beforeUpdate() {
    console.log("-----更新前-----");
  },
  updated() {
    console.log("-----更新后-----");
  },
  beforeUnmount() {
    console.log("-----销毁前-----");
  },
  unmounted() {
    console.log("-----销毁后-----");
  }, */
  //#endregion
}
</script>

<style>

</style>