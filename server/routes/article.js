// const articleRouter = require('express').Router()
import express from 'express'
import Article from '../models/article.js'

const articleRouter = express.Router()

articleRouter.get('/articles', function(req, res, next) {
  Article.find((err, data) => {
    const {...copy} = data
    res.status(200).json(copy)
  })
})

articleRouter.get('/:id', (req, res) => {
  const article = {
    id: req.params.id,
    cover: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-6dqemx.jpg',
    title: '测试',
    content: '## 这是一篇测试文章\noh yes~',
    tagList: ['Web', 'Vue3', 'Pinia'],
    category: '学习笔记'
  }
  res.status(200).json(article)
})

// module.exports = articleRouter
export default articleRouter