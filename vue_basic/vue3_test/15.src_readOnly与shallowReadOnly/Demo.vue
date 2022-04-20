<template>
  <h1>sum: {{sum}}</h1>
  <button @click="sum++">自增</button>
  <h2>姓名:{{name}}</h2>
  <button @click="changeName">改变姓名</button>
  <h2>年龄:{{age}}</h2>
  <button @click="changeAge">年龄自增</button>
  <h2>性别:{{sex}}</h2>
  <h3>工作:{{job.jobName}}</h3>
  <h3>薪水:{{job.salary}}</h3>
  <button @click="changeSalary">涨薪</button>
</template>

<script>
import {ref,reactive,toRefs, readonly, shallowReadonly, } from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup(props, context) {
    var sum = ref(0);
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
      readOnly与shallowReadonly
        - readonly: 让一个响应式数据变为只读的（深只读）对象中所有的数据都不能够修改。
        - shallowReadonly：让一个响应式数据变为只读的（浅只读）也就是只能读第一层，深层的数据还是能够改写。
        - 应用场景: 不希望数据被修改时。
    */
    person = readonly(person);
    person = shallowReadonly(person);

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
      changeName,
      changeAge,
      changeSalary,
      ...toRefs(person)
    }
  }
}
</script>

<style>

</style>