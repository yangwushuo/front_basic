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
        //可以前进也可后退，正数向后退，负数向前进
        this.$router.go(-1);
      }
    },
}
</script>

<style>

</style>