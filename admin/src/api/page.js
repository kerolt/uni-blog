import request from '@/utils/request.js'

export const getPageList = () => {
  return request({
    url: '/pages'
  })
}

export const updatePageBannerUrl = (data) => {
  return request({
    url: '/pages',
    method: 'put',
    data
  })
}
