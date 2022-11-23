import api from './index'

export const getQiniuToken = () => {
  return api({
    url: '/token/qiniu'
  })
}
