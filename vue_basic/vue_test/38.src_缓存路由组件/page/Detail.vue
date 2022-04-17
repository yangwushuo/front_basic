<template>
  <ul>
      <li>消息id:{{id}}</li>
      <li>消息标题:{{title}}</li>
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    //不需要再自己新this.$router.params这样获取参数，这些操作都交给路由通过props传入进来，组件内只需要负责接收  
    props:['id', 'title']
}
</script>

<style>

</style>