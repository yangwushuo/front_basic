<template>
  <h2>姓名:{{name}}</h2>
  <button @click="changeName">改变姓名</button>
  <h2>年龄:{{age}}</h2>
  <button @click="changeAge">年龄自增</button>
  <h2>性别:{{sex}}</h2>
  <h3>工作:{{jobName}}</h3>
  <h3>薪水:{{salary}}</h3>
  <button @click="changeSalary">涨薪</button>
</template>

<script>
import {ref,reactive, toRef,toRefs} from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup(props, context) {

    var person = reactive({
      name: 'tatum',
      age: 24,
      sex: '男',
      job:{
        jobName: '职业球员',
        salary: 20000,
      }
    })

    console.log(toRef((person,'name')));
    console.log('xxxx',toRefs(person));

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
      /* 
        使用toRef方法，相当于为key创建一个指针指向目标对象的某个属性值
        如果目标对象中的值被修改，那么对应的key值也会被同步修改
      */
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      sex: toRef(person, 'sex'),
      jobName: toRef(person.job, 'jobName'),
      salary: toRef(person.job, 'salary'),
      //精简写法
      /* 
        toRefs相当于toRef的批量处理
      */
      // ...toRefs(person)
    }
  }
}
</script>

<style>

</style>