<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- 
          如果添加name标签，那么动画样式v-enter-active默认名字必须修改为 hello-enter-active 
          添加apper属性 表示动画一开始就开始进入动画
      -->
      <transition name="hello" :appear="true">
          <h1 v-show="isShow">你好啊！</h1>
      </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true,
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    .hello-enter-active{
        animation: run 1s linear;
    }

    .hello-leave-active{
        animation: run 1s linear reverse;
    }

    @keyframes run {
        from{
            transform: translateX(-100%);
        }

        to{
            transform: translateX(0px);
        }
    }
</style>