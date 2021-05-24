import {request} from "./request";

class HomeData {
  constructor(res) {
    this.swiperData = res.data.banner.list
    this.recommendData = res.data.recommend
  }
}

export function getHomeData() {
  return request({
    url: '/home/multidata'
  }).then(res => {
    // console.log(res)
    return new HomeData(res)
  })
}

class HomeGoodsData {
  constructor(res) {
    this.data=res.data.list
  }
}

export function getHomeGoodsData(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  }).then(res=>{
    return new HomeGoodsData(res)
  })
}