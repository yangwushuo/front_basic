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
import {ref,reactive,watch} from 'vue'; //导入ref函数为变量进行引用
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

    //监视一个数据 参数：监视数据，钩子函数，配置对象
    watch(sum,function(newValue, oldValue){
      console.log("sum新数据:",newValue," 旧数据:", oldValue);
    },{
      // immediate: true,  
      // deep: true,
    });

    //同时监视多个数据，使用数组括起来
    watch([sum, str],function(newValue, oldValue){
      console.log("sum或者str新数据:",newValue," 旧数据:", oldValue);
    },{
      // immediate: true,  
    });

    //复杂类型情况一 监视reactive所定义的一个响应式数据的全部属性
    //注意: 1.此处无法正确的获取oldValue只能获取newValue 2.强制开启了深度监视(deep配置无效)
    watch(person, function(newValue,oldValue){
      console.log("person新数据:",newValue," 旧数据:", oldValue);
    },{});

    //复杂类型情况二 监视reactive所定义的一个响应式数据中的某个属性
    //注意： 第一个参数不能直接写成 person.age 写成函数式供内部调用
    watch(() => person.age, function(newValue,oldValue){
      console.log("person.age新数据:",newValue," 旧数据:", oldValue);
    },{});

    //复杂类型情况三 监视reactive所定义的一个响应式数据中的某些属性
    watch([
      () => person.name,
      () => person.age
    ], function(newValue,oldValue){
      console.log("person的name或age变化新数据:",newValue," 旧数据:", oldValue);
    },{})

    //特殊情况 
    watch(()=>person.job, function(newValue,oldValue){
      console.log("person的job变化新数据:",newValue," 旧数据:", oldValue);
    },{deep: true}) //此处由于监视的式reactive所定义的对象中的某个属性，所以deep配置有效

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