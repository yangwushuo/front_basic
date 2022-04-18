<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试一下go</button>
  </div>
  
</template>

<script>
export default {
    name: 'Banner',
    methods: {
      back(){
        //向前退一步
        this.$router.back();
      },
      forward(){
        //向后退一步
        this.$router.forward();
      },
      test(){
        //指定向前退的步长
        this.$router.go(2);
      }
    },
}
</script>

<style>

</style>