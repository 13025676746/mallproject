import {request} from "./request";

export function getCategoryData() {
  return request({
    url:'/category'
  }).then(res=>{
    // console.log(res)
    return res
  })
}

export function getSubcategoryData(maitKey) {
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  }).then(res=>{
    return res
  })
}

export function getSubcategotyDetailData(miniWallkey,type) {
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  }).then(res=>{
    return res
  })
}

