<template>
  <div class="child">
    <h2>我是Child组件(子)</h2>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son.vue';
export default {
    name: 'Child',
    components: {
        Son
    },
}
</script>

<style>
.child{
    background-color: green;
    padding: 10px;
}
</style>