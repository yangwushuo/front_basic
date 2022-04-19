<template>
  <h1>个人信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <button @click="showInfo">打印信息</button>
</template>

<script>
// import {h} from 'vue';
export default {
  name: 'App',
  //vue3 提供的新属性，可以将所有数据 响应函数都写入其中
  setup() {
    var name = 'Jason';
    var age = 20;

    function showInfo(){
      console.log(`我是${name}，今年${age}岁了`);
    }

    /* 
      setup函数的两种返回值：
      1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
      2. 若返回一个渲染函数：则可以自定义渲染内容。（了解）
    */
    //返回一个对象 这个对象返回的数据，模板中都可以直接使用(常用 )
    return {
      name,
      age,
      showInfo,
    }

    //不常用返回会覆盖template中的模板
    // return () =>{
    //   return h('h1','jason')
    // }
  }
}
</script>


