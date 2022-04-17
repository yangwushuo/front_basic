<template>
  <div>
      <h1>{{msg}}</h1>
      <div>
        <ul class="nav nav-tabs">
            <li>
                <!-- 如果是二级路径to中必须指定完成路径 -->
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
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