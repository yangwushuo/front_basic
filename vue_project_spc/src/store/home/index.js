import {reqCategoryList,reqGetBannerList,reqGetFloorList} from '@/api/index';

//action 处理action可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async cateGoryList({commit}){
    let result = await reqCategoryList();
    if(result.code == 200){
      commit('CATEGORYLIST', result.data);
    }
  },

  async getBannerList({commit}){
    let result = await reqGetBannerList();
    if(result.code == 200){
      commit('GETBANNERLIST', result.data);
    }
  },

  async getFloorList({commit}){
    let result = await reqGetFloorList();
    if(result.code == 200){
      commit('GETFLOORLIST', result.data);
    }
  },
};

//mutations 修改state的唯一手段
const mutations = {
  CATEGORYLIST(state, categoryList){
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList){
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList){
    state.floorList = floorList;
  },
};

//state 仓库存储数据的地方
const state = {
  //三级菜单
  categoryList: [],
  //轮播图
  bannerList: [],
  //floor
  floorList: [],
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
