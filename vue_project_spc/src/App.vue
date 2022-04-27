<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header/";
import Footer from "./components/Footer/";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {
    //调用vuex中的home模块中action，发送请求给服务器获取数据并存储
    this.$store.dispatch("home/cateGoryList");
  },
};
</script>

<style>
</style>
