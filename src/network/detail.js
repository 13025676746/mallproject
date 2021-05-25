import {request} from "./request";

class DetailData {
  constructor(res) {
    this.swiperData=res.result.detailInfo.detailImage["0"].list
    this.goodsInfoData=res.result
    this.shopInfoData=res.result.shopInfo
    this.userCommentData=res.result.rate
    this.goodsDetail=res.result.detailInfo
    this.paramsInfo=res.result.itemParams
  }
}

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  }).then(res=>{
    // console.log(res)
    return new DetailData(res)
  })
}

export function getRecommentData() {
  return request({
    url:'/recommend'
  }).then(res=>{
    // console.log(res.data.list)
    return res.data.list
  })
}