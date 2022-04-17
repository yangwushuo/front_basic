<template>
  <div>
      <h1>{{msg}}</h1>
      <div>
        <ul class="nav nav-tabs">
            <li>
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