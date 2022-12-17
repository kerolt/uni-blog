import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    console.log(response.data)
    return response.data
  },
  (error) => {
    ElMessage({
      type: 'error',
      message: '出错啦！'
    })
    console.error(error)
    return Promise.reject(error)
  }
)

export default request
