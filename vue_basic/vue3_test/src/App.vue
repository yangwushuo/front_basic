<template>
  <div class="app">
    <h1>我是App组件(祖)</h1>
    <!-- 
        使用Suspense内置标签，相当于一个插槽，两个值: default fallback
          default这个插槽: 如果组件加载完毕就在这个插槽直接显示
          fallback:  如果组件没有加载完毕就先显示模板中自定义得
     -->
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
    <a-button type="primary">Primary</a-button>
    <a-upload action="/" />
  </div>
</template>

<script>  
/* 
  静态引入与异步引入得区别
    静态引入：所有组件都引入完毕加载完毕再一起显示出来
    异步引入：哪个组件先加载出来就显示哪个组件
*/
import {defineAsyncComponent} from 'vue';
// import Child from './components/Child.vue'; //静态引入
const Child = defineAsyncComponent(()=>import('./components/Child.vue'));// 异步引入
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


