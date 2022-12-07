import express from 'express'
import Article from '../models/article.js'
import result from '../utils/result.js'

const articleRouter = express.Router()

// 获取所有文章
articleRouter.get('/', async (req, res) => {
  console.log(req.query)
  const { currentPage, pageSize } = req.query
  const articleList = await Article.find({})
    .skip((currentPage - 1) * pageSize)
    .limit(pageSize)
  const count = await Article.countDocuments({})
  console.log(count)
  res.status(200).json(result(200, '查询成功', { articleList, count }))
})

// 根据id获取文章信息
articleRouter.get('/:id', (req, res) => {
  Article.findById(req.params.id, (err, doc) => {
    if (err) {
      res.status(500).json(result(500, '查询失败啦', doc))
    } else {
      res.status(200).json(result(200, '查询成功', doc))
    }
  })
})

// 更新或发布文章
articleRouter.post('/', async (req, res) => {
  const data = req.body._value
  if (data._id === '') {
    // 发布
    const article = new Article({
      cover: data.cover,
      title: data.title,
      content: data.content,
      tagList: data.tagList,
      category: data.category
    })
    await article.save()
    res.status(200).json(result(200, '发布成功', null))
  } else {
    // 更新
    await Article.updateOne({ _id: data._id }, data)
    res.status(200).json(result(200, '更新成功', null))
  }
})

// 根据id数组批量删除
articleRouter.delete('/', async (req, res) => {
  const idArray = req.body
  await Article.remove({ _id: { $in: idArray } })
  res.status(200).json(result(200, '批量删除成功', null))
})

// 根据id删除
articleRouter.delete('/:id', async (req, res) => {
  await Article.deleteOne({ _id: req.params.id })
  res.status(200).json(result(200, '删除成功', null))
})

// module.exports = articleRouter
export default articleRouter
