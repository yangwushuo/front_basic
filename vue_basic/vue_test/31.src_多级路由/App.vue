<template>
	<div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <Banner></Banner>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现路由的切换 active-class如果被点击就将样式添加到类中， to指定组件-->
          <router-link to="/about" class="list-group-item" active-class="active">About</router-link>
          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>

        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './components/Banner.vue'
	export default {
		name:'App',
		components:{
      Banner
		},
	}
</script>

<style lang="css">

</style>