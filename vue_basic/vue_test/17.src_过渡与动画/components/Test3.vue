<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- 
          使用第三方动画
          enter-active-class:设置进入的动画
          leave-active-class:设置离开的动画
       -->
      <transition-group  
        :appear="true"
        name="animate_animated animate_bounce"
        enter-active-class="animate__bounceIn"
        leave-active-class="animate__bounceIn"
        >
          <h1 v-show="isShow" key="1">你好啊！</h1>
          <h1 v-show="!isShow" key="2">{{name}}</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    data() {
        return {
            isShow: true,
            name: 'Jason'
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }
</style>