import {
  reqGetCode,
  reqLogout,
  reqUserInfo,
  reqUserLogin,
  reqUserRegister
} from "@/api";
import {
  setToken,
  getToken,
  removeToken
} from "@/utils/token";

const actions = {
  //发送验证码请求
  async getCode({
    commit
  }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
    } else {
      return Promise.reject(new Error("get code failed"));
    }
  },

  //用户注册
  async userRegister({
    commit
  }, data) {
    let result = await reqUserRegister(data);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("user register failed"));
    }
  },

  //用户登录
  async userLogin({
    commit
  }, data) {
    let result = await reqUserLogin(data);
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token);
      //token本地存储
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("user login failed"));
    }
  },

  //获取用户信息
  async getUserInfo({
    commit
  }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return "ok;"
    } else {
      return Promise.reject(new Error("get user info failed"));
    }
  },

  //退出登录
  async userLogout({
    commit
  }) {
    let result = await reqLogout();
    if (result.code == 200) {
      commit('USERLOGOUT');
      return "ok";
    } else {
      return Promise.reject(new Error("user logout failed"));
    }
  }
};

const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;;
  },
  USERLOGOUT(state){
    state.token = '';
    state.userInfo = {};
    removeToken();
  }
};

const state = {
  code: '',
  token: getToken(),
  userInfo: {},
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