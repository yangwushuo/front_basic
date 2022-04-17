<template>
  <ul>
      <li>消息id:{{this.$route.query.id}}</li>
      <li>消息标题:{{this.$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this)
    },
}
</script>

<style>

</style>