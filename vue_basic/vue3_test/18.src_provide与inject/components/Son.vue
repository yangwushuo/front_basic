<template>
  <div class="son">
    <h3>我是Son组件(孙),{{car.name}}--{{car.price}}w</h3>
  </div>
</template>

<script>
import {inject} from 'vue';
export default {
    name: 'Son',
    setup(props) {
        //获取祖先传来的数据 接收的是响应式的数据
        var car = inject('car');

        return {
            car,
        }
    }
}
</script>

<style>
.son{
    background-color: blue;
    padding: 10px;
}
</style>