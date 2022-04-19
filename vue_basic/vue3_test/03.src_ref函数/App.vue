<template>
  <h1>个人信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h3>职位:{{job.jobName}}</h3>
  <h3>薪水:{{job.salary}}</h3>
  <button @click="changeInfo">改变信息</button>
</template>

<script>
// import {h} from 'vue';
import {ref} from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup() {
    //使用ref 定义一个响应式数据
    //基本类型 基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的
    var name = ref('Jason');
    var age = ref(20);
    //复杂类型 对象类型的数据：内部求助了Vue3.0中的一个新函数—— reactive函数 使用proxy代理
    var job = ref({
      jobName: '前端工程师',
      salary: 20000,
    })

    function changeInfo(){
      //通过修改变量的值 如果直接修改变量 如: name = 'harden'; 那么模板中使用该数据的地方不会被重新渲染
      //基本类型修改方式
      name.value = 'tatum';
      age.value = 24;
      //复杂类型修改方式
      job.value.salary = 10000;
    }

    return {
      name,
      age,
      job,
      changeInfo,
    }
  }
}
</script>


