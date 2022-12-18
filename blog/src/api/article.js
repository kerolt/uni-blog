/*
 * @Author: liuyx 1517482303@qq.com
 * @Date: 2022-12-08 17:15:58
 * @LastEditTime: 2022-12-17 10:34:05
 * @Description: 文章相关API
 */
import request from '../utils/request'

export const getArticleList = () => {
  return request({
    url: '/articles'
  })
}

// 根据id获取文章
export const getArticleById = (id) => {
  return request({
    url: `/articles/${id}`
  })
}
