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
  <button @click="showPersonInfo">打印人的信息</button>
  <h1>身高与体重:{{person.hw}}</h1>
  <button @click="addPersonData">创建身高与体重</button>
  <button @click="person.hw.height++">增加体重</button>
</template>

<script>
import {ref,reactive,toRefs, readonly, shallowReadonly, toRaw, markRaw, } from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup(props, context) {
    //数据
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
      toRaw与markRaw
        - toRaw：
          - 作用：将一个由reactive生成的响应式对象转为普通对象
          - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
        - markRaw：
          - 作用：标记一个对象，使其永远不会再成为响应式对象。
          - 应用场景:
            1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
            2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
    */
    function showPersonInfo(){
      //使用toRaw方法可将响应式的对象数据转换为非响应式也就是对象实例，
      //如果toRaw无法转换使用ref创建的基本类型响应数据，
      var info = toRaw(person);
      console.log("人的信息", info);
      var num = toRaw(sum)
      console.log("sum=",num);
    }

    function addPersonData(){
      //添加数据到响应式中
      //如果我们添加属性时，不要让他是响应式的数据，而是非响应式不可改变，使用markRaw,这样添加的数据就是非响应式，可以读取不能修改
      person.hw = markRaw({
        height: 180,
        weight: 145,
      })
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
      addPersonData,
      showPersonInfo,
      changeName,
      changeAge,
      changeSalary,
      //一般我们使用toRefs暴露出去以后就无法在读取person中属性，提前暴露person属性可以解决问题
      person,
      ...toRefs(person)
    }
  }
}
</script>

<style>

</style>