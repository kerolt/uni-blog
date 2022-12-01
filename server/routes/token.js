// const tokenRouter = require('express').Router()
// const qnconfig = require('../config') // 引入七牛云配置
import express from 'express'
import { uploadToken } from '../config.js'

const tokenRouter = express.Router()

tokenRouter.get('/qiniu', (req, res, next) => {
  res.status(200).send(uploadToken)
})

// module.exports = tokenRouter
export default tokenRouter
