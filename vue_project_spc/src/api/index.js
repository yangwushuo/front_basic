//api统一管理
import requests from './request'
import mockRequest from './mockAjax'
import { method } from 'lodash';

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

//用户登录
export const reqUserLogin = (data) => {
  return requests({
    url: `/user/passport/login`,
    data,
    method: 'post',
  })
}

//获取用户信息
export const reqUserInfo = () => {
  return requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get',
  })
}

//退出登录
export const reqLogout = () => {
  return requests({
    url: '/user/passport/logout',
    method: 'get',
  })
}

//获取用户地址信息
export const reqAddressInfo = () => {
  return requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get',
  })
}

//获取商品清单
export const reqOrderInfo = () => {
  return requests({
    url: '/order/auth/trade',
    method: 'get',
  })
}

//提交订单
export const reqSubmitOrder = (tradeNo, data) => {
  return requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post',
  })
}

//获取支付订单信息
export const reqPayInfo = (orderId) => {
  return requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get',
  })
}

//获取支付状态
export const reqPayStatus = (orderId) => {
  return requests({
    url: `payment/weixin/queryPayStatus/${orderId}`,
    method: 'get',
  })
}

//获取我的订单列表
export const reqMyOrderList = (page, limit) => {
  return requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'get',
  })
}




