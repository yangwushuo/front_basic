<template>
  <div class="app">
    <h1>我是App组件(祖)</h1>
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
}
</script>

<style>
.app{
  background-color: skyblue;
  padding: 10px;
}
</style>


