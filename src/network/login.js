import {registerOrLogin} from "./request";

export function userLogin(username,password) {
  return registerOrLogin({
    url:'/login',
    method:'post',
    data:{
      username,
      password
    }
  }).then(res=>{
    return res
  })
}