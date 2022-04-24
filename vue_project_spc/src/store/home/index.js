import {reqCategoryList} from '@/api/index';

//action 处理action可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async cateGoryList({commit}){
    let result = await reqCategoryList();
    if(result.code == 200){
      commit('CATEGORYLIST', result.data);
    }
  },
};
//mutations 修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList){
    state.categoryList = categoryList;
  },
};
//state 仓库存储数据的地方
const state = {
  categoryList: [],
};
//getters 理解为计算属性
const getters = {

};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
}
