// const mongoose = ('mongoose')
import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  cover: {
    type: String
  },
  title: String,
  content: String,
  category: String,
  tagList: [],
  views: {
    type: Number,
    default: 0
  },
  createTime: {
    type: Date,
    default: Date.now()
  },
  updateTime: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Article', ArticleSchema, 'article')
