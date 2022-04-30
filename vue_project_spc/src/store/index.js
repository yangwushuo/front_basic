//vuex注册插件
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

//模块式开发使用vuex 引入小仓库
import home from './home';
import search from './search';
import detail from './detail'

export default new Vuex.Store({
  //实现Vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
    detail,
  }
});