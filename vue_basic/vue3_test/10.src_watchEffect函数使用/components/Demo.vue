<template>
  <h1>sum:{{sum}}</h1>
  <button @click="sumAdd">sum自增</button>
  <h1>str:{{str}}</h1>
  <button @click="strChange">str改变</button>
  <hr>
  <h2>姓名:{{person.name}}</h2>
  <button @click="changeName">改变姓名</button>
  <h2>年龄:{{person.age}}</h2>
  <button @click="changeAge">年龄自增</button>
  <h2>性别:{{person.sex}}</h2>
  <h3>工作:{{person.job.jobName}}</h3>
  <h3>薪水:{{person.job.salary}}</h3>
  <button @click="changeSalary">涨薪</button>
</template>

<script>
import {ref,reactive,watchEffect, watch} from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup(props, context) {

    //基本类型监视测试
    var sum = ref(0);
    var str = ref('jason');
    //复杂类型监视测试
    var person = reactive({
      name: 'tatum',
      age: 24,
      sex: '男',
      job:{
        jobName: '职业球员',
        salary: 20000,
      }
    })

    /* 
      不用知名监视那个属性，监视的回调中用到哪个属性，那就监视哪个属性
        watchEffect与computed有点相似只要函数中含有某个属性发生数据变化的时候，就会重新执行一次回调函数
    */
    watchEffect(function(){
      var sumCopy = sum.value;
      var personAgeCopy = person.age;
      var personJobSalaryCopy = person.job.salary;
      console.log("执行了一次回调函数",sumCopy,personAgeCopy,personJobSalaryCopy);
    });

    function sumAdd(){
      sum.value++;
    }

    function strChange(){
      str.value += "!";
    }

    function changeName(){
      person.name = person.name + '$';
    }

    function changeAge(){
      person.age++;
    }

    function changeSalary(){
      person.job.salary += 1000;
    }

   return {
       sum,
       str,
       person,
       sumAdd,
       strChange,
       changeName,
       changeAge,
       changeSalary,
   }
  }
}
</script>

<style>

</style>