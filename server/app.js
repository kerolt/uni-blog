// const express = require('express')
// const bodyparse = require('body-parser')
// const routes = require('./routes')
import express from 'express'
import bodyparse from 'body-parser'
import routes from './routes/index.js'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('连接成功')
  }
})

// 创建服务
const app = express()
// 解析数据
app.use(bodyparse.json())

// 路由
routes(app)

// 监听3000端口
app.listen(3000, () => {
  console.log('this server are running on http://localhost:3000')
})