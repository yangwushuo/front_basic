<template>
  <div class="app">
    <h1>我是App组件(祖),{{name}}--{{price}}w</h1>
    <Child></Child>
  </div>
</template>

<script>
import { reactive, toRefs, provide} from 'vue'
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: {
    Child
  },
  setup(props) {
    
    var car = reactive({
      name: '迈巴赫',
      price: 200,
    })
    //使用provid发送数据供后代组件使用
    provide('car', car);

    return {
      ...toRefs(car),
    }
  }
}
</script>

<style>
.app{
  background-color: skyblue;
  padding: 10px;
}
</style>


