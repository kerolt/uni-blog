/*
 * @Author: liuyx 1517482303@qq.com
 * @Date: 2022-12-17 10:33:16
 * @LastEditTime: 2022-12-17 10:39:50
 * @Description: 网站信息API
 */
import request from '../utils/request'

export const getSiteInfo = () => {
  return request({
    url: '/sites'
  })
}
