// const token = require('./token')
// const article = require('./article')
import token from './token.js'
import article from './article.js'

// module.exports = routers = (app) => {
//   app.use('/token', token)
//   app.use('/article', article)
// }

const routes = (app) => {
  app.use('/token', token)
  app.use('/article', article)
}

export default routes
