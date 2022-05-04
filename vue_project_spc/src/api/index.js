//api统一管理
import requests from './request'
import mockRequest from './mockAjax'

export const reqCategoryList = () => {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
  })
};

//轮播图
export const reqGetBannerList = () => {
  return mockRequest({
    url: '/banner',
    method: 'get',
  })
}

//floor
export const reqGetFloorList = () => {
  return mockRequest({
    url: '/floor',
    method: 'get',
  })
}

//search
export const reqGetSearchInfo = (params) => {
  return requests({
    url: '/list',
    method: 'post',
    data: params
  })
}

//detail
export const reqGoodsInfo = (skuId) => {
  return requests({
    url: `/item/${skuId}`,
    method: 'get'
  })
}

//发送添加购物车 并获取数据
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
} 

//获取购物车列表
export const reqCartList= () => {
  return requests({
    url: `/cart/cartList`,
    method: 'get'
  })
}

//删除购物车
export const reqDeleteCartById = (skuId) => {
  return requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
  })
}

//修改购物车商品状态
export const reqUpdateCheckedById = (skuId, isChecked) => {
  return requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
  })
}

//获取验证码
export const reqGetCode = (phone) => {
  return requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })
}

//用户注册
export const reqUserRegister = (data) => {
  return requests({
    url: `/user/passport/register`,
    data,
    method: 'post'
  })
}




