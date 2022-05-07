import { reqAddressInfo, reqOrderInfo } from "@/api";

const actions = {
  //获取用户地址列表
  async getUserAddress({commit}){
    let result = await reqAddressInfo();
    if(result.code == 200){
      commit('GETUSERADDRESS',result.data);
    }else{
      return Promise.reject(new Error("get user address failed"));
    }
  },
  //获取用户订单
  async getOrderInfo({commit}){
    let result = await reqOrderInfo();
    if(result.code == 200){
      commit('GETORDERINFO',result.data);
    }else{
      return Promise.reject(new Error("get order info failed"));
    }
  }
};

const mutations = {
  GETUSERADDRESS(state, address){
    state.address = address;
  },
  GETORDERINFO(state, orderInfo){
    state.orderInfo = orderInfo;
  }
};

const state = {
  address: [],
  orderInfo: {},
};

const getters = {

};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
} 