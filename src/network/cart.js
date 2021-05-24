import {registerOrLogin} from "./request";

export function cartAdd(goods) {
  return registerOrLogin({
    url:'/cart/add',
    method:'post',
    data:goods
  })
}

export function cartNumberUpdate(iid,userid) {
  return registerOrLogin({
    url:'/cart/number/update',
    method:'post',
    data:{
      iid,
      userid
    }
  })
}

export function cartSelectUpdate(iid,userid,isSelect) {
  return registerOrLogin({
    url:'/cart/select/update',
    method:'post',
    data:{
      iid,
      userid,
      isSelect
    }
  })
}

export function cartAllSelectUpdate(userid,isSelectAll) {
  return registerOrLogin({
    url:'/cart/all/select/update',
    method:'post',
    data:{
      userid,
      isSelectAll
    }
  })
}

export function cartQuery(userid) {
  return registerOrLogin({
    url:'/cart/query',
    method:'post',
    data:{
      userid
    }
  })
}

export function cartDelete(iid,userid) {
  return registerOrLogin({
    url:'/cart/delete',
    method:'post',
    data:{
      iid,
      userid
    }
  })
}