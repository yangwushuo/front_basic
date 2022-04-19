<template>
  <h1>个人信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h3>职位:{{job.jobName}}</h3>
  <h3>薪水:{{job.salary}}</h3>
  <h4>地址:{{job.address.home}}</h4>
  <h4>地址:{{job.address.work}}</h4>
  <button @click="changeInfo">改变信息</button>
</template>

<script>
// import {h} from 'vue';
import {reactive, ref} from 'vue'; //导入ref函数为变量进行引用
export default {
  name: 'App',
  setup() {
    //使用ref 定义一个响应式数据
    //基本类型 基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的
    var name = ref('Jason');
    var age = ref(20);

    //使用reactive复杂类型函数 可以深度监测 调用数据不需要再.value写法直接使用属性
    //接收一个对象(或数组),返回一个代理对象(proxy对象)
    //reactive定义的响应式数据是深层次的
    //内部基于ES6的proxy是心啊，通过代理对象操作源对象内部数据进行操作
    var job = reactive({
      jobName: '前端工程师',
      salary: 20000,
      hobby:['篮球','足球'],
      address:{
        work: '南京栖霞',
        home: '南京秦淮',
      },
    })

    function changeInfo(){
      name.value = 'tatum';
      age.value = 24;
      //复杂类型修改方式
      job.jobName = 'UI设计';
      job.salary = 10000;
      job.hobby[0] = '跳舞';
      job.address.work = '北京朝阳';
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


