<template>
  <div>
      <h1>{{msg}}</h1>
      <div>
        <ul class="nav nav-tabs">
            <li>
                <!-- 
                    作用：控制路由跳转时操作浏览器历史记录的模式
                    浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录。路由跳转时候默认为push
                    如何开启replace模式：<router-link replace .......>News</router-link>
                    添加replace属性，则不会在路由器记录中增加记录，而是覆盖当前记录再跳转
                    默认是增加记录
                 -->
                <router-link replace="true" class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <!-- 简写形式 -->
                <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <router-view></router-view>
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