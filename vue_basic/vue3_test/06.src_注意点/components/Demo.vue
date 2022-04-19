<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <button @click="testHello">测试一个父组件给子组件定义的hello事件</button><br>
  <slot name="testSlot1"></slot>
  <slot name="testSlot2"></slot>
</template>

<script>
import {reactive, ref} from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  props: ['msg'],
  //这里最好申明一下自定义事件
  emits: ['sayHello'],
  beforeCreate() {
    console.log("生命周期---beforeCreate");
  },
  //重点注意: setup在beforeCreate之前创建，并且里面没有this
  setup(props, context) {
    console.log("setup正在创建中");
    //props中保存的了所有父组件传来的数据
    console.log("输出props:",props);
    console.log("输出context",context);
    console.log("获取context上下文中attrs属性中的school属性",context.attrs.school);
    console.log("测试context中自定义事件属性emit",context.emit);
    console.log("测试context中插槽属性slot",context.slots);

   var person = {
       name: 'jason',
       age: 20,
   }

   function testHello(){
    //测试自定义事件
    console.log("正在测试testHello");
    context.emit("hello","你好Chinaese");
   }

   return {
       person,
       testHello
   }
  }
}
</script>

<style>

</style>