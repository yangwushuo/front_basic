<template>
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
import {ref,reactive, toRef,toRefs, shallowReactive, shallowRef} from 'vue'; //导入ref函数为变量进行引用
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

    /* 
      shallowRef与shallowReactive应用
      - shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
      - shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

      - 什么时候使用?
        -  如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。
        -  如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。
    */
    //如果使用shallowRef引用一个对象类型的数据不会有任何作用，因为它不想ref一样，ref如果发现是对象类型会间接使用reative
    var b = shallowRef(2);
    var a = shallowRef({
      x:2,
    });

    //如果使用shallowReactive引用一个对象类型，那么响应式只能响应对象中的第一层，y中的对象数据如果发生变化，不会被响应
    var c = shallowReactive({
      x:2,
      y: {
        a:2 
      }
    });


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