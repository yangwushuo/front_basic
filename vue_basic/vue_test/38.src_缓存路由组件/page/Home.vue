<template>
  <div>
      <h1>{{msg}}</h1>
      <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <!-- 简写形式 -->
                <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <!-- 
            使用keep-active包裹router视图，如果include涵盖了某个组件名字比如News，那么在路由切换加载其他组件的时候，包含组件名News替换的组件不会被销毁
                而是缓存起来，等下一次路径跳转回来的时候，直接从缓存中读取之前已经加载过News的组件直接使用即可
            如果不是include进行指定，那么所有的组件都会被缓存
            缓存多个组件 :include="['xxxx', 'xxxx']"
         -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>   
        
	</div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            msg:'我是Home内容'
        }
    },
}
</script>

<style>

</style>