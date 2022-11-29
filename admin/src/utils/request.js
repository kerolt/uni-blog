import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
  return response
}, (error) => {
  ElMessage({
    type: 'error',
    message: '出错啦！'
  })
  return Promise.reject(error)
})

export default request
