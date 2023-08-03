import axios from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://47.100.118.236:8068/v1/',
  timeout: 50000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {

    return config
  },
  function (error) {
  
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance