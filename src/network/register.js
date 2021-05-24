import {registerOrLogin} from "./request";

export function registerUser(username,password) {
  return registerOrLogin({
    url:'/register',
    method:'post',
    data:{
      username,
      password
    }
  }).then(res=>{
    return res
  })
}
