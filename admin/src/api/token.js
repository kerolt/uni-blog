import request from '@/utils/request.js'

export const getQiniuToken = () => {
  return request({
    url: '/token/qiniu'
  })
}
