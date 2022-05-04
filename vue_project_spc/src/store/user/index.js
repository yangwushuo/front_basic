import { reqGetCode, reqUserRegister} from "@/api";

const actions = {
  //发送验证码请求
  async getCode({commit}, phone){
    let result = await reqGetCode(phone);
    if(result.code == 200){
      commit("GETCODE", result.data);
    }else{
      return Promise.reject(new Error("get code failed"));
    }
  },
  //用户注册
  async userRegister({commit}, data){
    let result = await reqUserRegister(data);
    if(result.code == 200){
      return "ok";
    }else{
      return Promise.reject(new Error("user register failed"));
    }
  }
};

const mutations = {
  GETCODE(state, code){
    state.code = code;
  }
};

const state = {
  code: '',
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
