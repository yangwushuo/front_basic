<template>
  <h1>sum:{{sum}}</h1>
  <button @click="sumAdd">sum自增</button>
  <hr>
  <h1>显示当前鼠标坐标: x={{p.x}},y={{p.y}}</h1>
</template>

<script>
import {ref} from 'vue'; //导入ref函数为变量进行引用
import usePoint from '../hooks/usePoint';
export default {
  name: 'App',
  setup(props, context) {

    //基本类型
    var sum = ref(0);
    //使用自定义钩子hooks
    var p = usePoint();

    function sumAdd(){
      sum.value++;
    }

    return {
      sum,
      sumAdd,
      p
    }
  },
}
</script>

<style>

</style>