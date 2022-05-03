import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import {getUUID} from '@/utils/uuid_token';

//action 处理action可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async getGoodInfo({commit},skuId){
    let result = await reqGoodsInfo(skuId);
    if(result.code == 200){
      commit('GETGOODINFO',result.data);
    }
  },
  async addOrUpdateShopCart({commit},{skuId, skuNum}){
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if(result.code == 200){
      return "ok";
    }else{
      return new Promise(new Error("add shopcar failed"));
    }
  }
};

//mutations 修改state的唯一手段
const mutations = {
  GETGOODINFO(state, goodInfo){
    state.goodInfo = goodInfo;
  }
};

//state 仓库存储数据的地方
const state = {
  goodInfo: {},
  uuid_token: getUUID(),
};

//getters 理解为计算属性
const getters = {
  categoryView(state){
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state){
    return state.goodInfo.skuInfo || {};
  },
  //产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
