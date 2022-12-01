/*
七牛云配置
*/
// const qiniu = require('qiniu')
import qiniu from 'qiniu'

// 创建上传凭证
const accessKey = 'et7Cr4yqTf5kHJ3cNuAkzAghjGI378X9tflGO6dT' // 这里填写七牛云的accessKey
const secretKey = '1eKk1NJIeXmuZ6klkvaLmvRqVQeuO817G_6AOblD'// 这里填写七牛云的secretKey
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'liuyxcc-blog', // 这里填写七牛云空间名称
  expires: 60 * 60 * 24 * 7
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

export {
  uploadToken
}
