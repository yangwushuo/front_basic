<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            msg: '我是About内容'
        }
    },
    beforeRouteEnter (to, from, next) {
      // 只有通过路由进入该组件之前才会调用
      //判断跳转的路径是否需要权限
      if(to.meta.isAuth){
          //判断名字
          if(localStorage.getItem('name') == 'jason'){
              //进行跳转
              next();
          }else{
              alert(localStorage.getItem("name")+"您的权限不够!");
          }
      }else{
          //不需要授权直接跳转
          next();
      }
    },
    beforeRouteLeave (to, from, next) {
      // 只有通过路由离开该组件之前才会调用
      console.log("组件离开之前触发了");
      next()
    }
}
</script>

<style>

</style>