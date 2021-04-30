import axios from "axios";

export function request(options) {
  /*
  * 创建axios实例
  * */
  const axiosInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  /*
  * 拦截请求、处理后发送请求
  * */
  axiosInstance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error);
  })

  /*
  * 拦截响应，处理后返回结果
  * */
  axiosInstance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  })

  /*
  * 发送网络请求，并将响应结果返回
  * */
  return axiosInstance(options)
}