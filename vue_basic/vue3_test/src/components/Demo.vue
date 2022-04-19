<template>
  <h1>姓:<input type="text" v-model="person.firstName" /></h1>
  <h1>名:<input type="text" v-model="person.lastName" /></h1>
  <h1>全名:{{person.fullName}}</h1>
  <span>修改全名:<input type="text" v-model="person.fullName"/></span>
</template>

<script>
import {reactive,computed} from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup(props, context) {

   var person = reactive({
       firstName: 'Jason',
       lastName: 'tatum',
   });

   //使用简写形式，如果只有读取没有修改
   /*  var fullName = computed(function(){
       return person.firstName + '-' + person.lastName;
    }) */

   //vue3使用计算属性 需要引入computed函数进行创建
    person.fullName = computed({
     get(){
       return person.firstName + '-' + person.lastName;
     },
     set(value){
        var newValue = value.split("-");
        person.firstName = newValue[0];
        person.lastName = newValue[1];
     }
    })

   return {
       person,
   }
  }
}
</script>

<style>

</style>