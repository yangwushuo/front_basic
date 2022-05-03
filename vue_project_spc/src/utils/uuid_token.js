import {
  v4 as uuidv4
} from 'uuid'
export const getUUID = () => {
  //获取本地存储id
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  if (!uuid_token) {
    uuid_token = uuidv4();
    localStorage.setItem("UUIDTOKEN", uuid_token)
  }
  return uuid_token;
}







// [{
//   "id": 55880,
//   "userId": "5e703a18-01b4-4eab-9943-60df20f36acb",
//   "skuId": 2229,
//   "cartPrice": 2654,
//   "skuNum": 2,
//   "imgUrl": "http://47.93.148.192:8080/group1/M00/02/DB/rBHu8mGxPb-AbAS8AADirbHQFGA856.jpg",
//   "skuName": "华为",
//   "isChecked": 1,
//   "createTime": "2022-05-03 17:28:07",
//   "operateTime": "2022-05-03 19:43:13",
//   "isOrdered": 0,
//   "orderTime": null,
//   "sourceType": "QUERY",
//   "sourceId": 2229,
//   "skuPrice": 2654,
//   "couponInfoList": null
// }, {
//   "id": 55871,
//   "userId": "5e703a18-01b4-4eab-9943-60df20f36acb",
//   "skuId": 17,
//   "cartPrice": 2323,
//   "skuNum": 8,
//   "imgUrl": "http://47.93.148.192:8080/group1/M00/00/02/rBHu8l-sklaALrngAAHGDqdpFtU741.jpg",
//   "skuName": "华为P40 5G【白条免息可选送豪礼】全网通智能手机 支持鸿蒙HarmonyOS 零度白 8G+128G",
//   "isChecked": 1,
//   "createTime": "2022-05-03 17:19:08",
//   "operateTime": "2022-05-03 20:31:22",
//   "isOrdered": 0,
//   "orderTime": null,
//   "sourceType": "QUERY",
//   "sourceId": 17,
//   "skuPrice": 2323,
//   "couponInfoList": null
// }]