// const mongoose = ('mongoose')
import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  category: String,
  content: String,
  cover: String,
  tagList: [],
  title: String,
})

export default mongoose.model('Article', ArticleSchema)
