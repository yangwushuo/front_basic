import { reqCartList, reqDeleteCartById, reqUpdateCheckedById} from "@/api";

const actions = {
  //获取购物车列表
  async getCartList({commit}){
    let result = await reqCartList();
    if(result.code == 200){
      commit('GETCARTLIST', result.data)
    }
  },
  //删除购物车
  async deleteCartListById({commit}, skuId){
    let result = await reqDeleteCartById(skuId);
    if(result.code == 200){
      return "ok";
    }else{
      return Promise.reject(new Error("delete cart failed"));
    }
  },
  //修改购车车商品状态
  async updateCheckedById({commit}, {skuId, isChecked}){
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if(result.code == 200){
      return "ok";
    }else{
      return Promise.reject(new Error("update cart checked failed"));
    }
  },
  //删除购物车所有选中的商品
  deleteAllCheckedCart({dispatch, getters}){
    //创建一个数组存储所有的promise信息
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(cart => {
      if(cart.isChecked == 1){
        PromiseAll.push(dispatch('deleteCartListById', cart.skuId)); 
      }
    });
    //Promise.all功能只要数组中有一个失败则返回失败，如果所有都成功则返回成功
    return Promise.all(PromiseAll);
  },
  //更改购物车所有商品的选中状态
  updateAllCartChecked({dispatch, getters}, isChecked){
    //创建一个数组存储所有的promise信息
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(cart => {
      PromiseAll.push(dispatch('updateCheckedById', {
        skuId: cart.skuId,
        isChecked: isChecked,
      })); 
    });
    return Promise.all(PromiseAll);
  }
};

const mutations = {
  GETCARTLIST(state, cartList){
    state.cartList = cartList;
  }
};

const state = {
  cartList: [],
}; 

const getters = {
  cartList(state){
    return state.cartList[0] || {};
  }
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
