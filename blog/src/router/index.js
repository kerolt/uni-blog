import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/tags',
    component: () => import('@/views/tag/Tag.vue')
  },
  {
    path: '/categories',
    component: () => import('@/views/category/Category.vue')
  },
  {
    path: '/archives',
    component: () => import('@/views/archive/Archive.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/about/About.vue')
  },
  {
    path: '/articles/:articleId',
    component: () => import('@/views/article/Article.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0) // 切换路由之后滚动条始终在最顶部
})

export default router
