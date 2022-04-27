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

