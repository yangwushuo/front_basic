<template>
  <div class="son">
    <h3>我是Son组件(孙)</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
    name: 'Son',
    components:{
        Dialog
    }
}
</script>

<style>
.son{
    background-color: blue;
    padding: 10px;
}
</style>