import { reqGetSearchInfo } from "@/api";

//action 处理action可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async getSearchList({commit}, params={}){
    let result = await reqGetSearchInfo(params);
    if(result.code == 200){
      commit('GETSEARCHLIST',result.data)
    }
  }
};
//mutations 修改state的唯一手段
const mutations = {
  GETSEARCHLIST(state, searchList){
    state.searchList = searchList
  }
};
//state 仓库存储数据的地方
const state = {
  searchList: {}
};
//getters 理解为计算属性
const getters = {
  goodsList(state){
    return state.searchList.goodsList || [];
  },
  attrsList(state){
    return state.searchList.attrsList || [];
  },
  trademarkList(state){
    return state.searchList.trademarkList || [];
  }
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
