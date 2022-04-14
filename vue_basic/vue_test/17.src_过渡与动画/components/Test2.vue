<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- 
          如果一个动画transition中含有多个标签元素，那么需要使用transition-group并添加唯一key值
          才能同时使用动画效果，因为transition只能为一个标签元素提供动画
       -->
      <transition-group name="hello" :appear="true">
          <h1 v-show="isShow" key="1">你好啊！</h1>
          <h1 v-show="!isShow" key="2">{{name}}</h1>
      </transition-group>
  </div>
</template>

<script>
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

    /* 
        vue会给每一个动画效果添加起点和终点样式 三种 进入 过渡 结束
    */

    /* 进入的起点、离开的终点 */
    .hello-enter, .hello-leave-to{
        transform: translateX(-100%);
    }

    /* 设置进入和离开额动画过渡效果 */
    .hello-enter-active, .hello-leave-active{
        transition: 0.5s linear;
    }

    /* 进入的终点、离开的起点 */
    .hello-enter-to, .hello-leave{
        transform: translateX(0);
    }
</style>