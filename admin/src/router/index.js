import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/article',
        component: () => import('@/views/article/Article.vue')
      },
      {
        path: '/article-list',
        component: () => import('@/views/article/ArticleList.vue')
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
        path: '/page',
        component: () => import('@/views/page/Page.vue')
      },
      {
        path: '/about',
        component: () => import('@/views/about/About.vue')
      },
      {
        path: '/users',
        component: () => import('@/views/user/User.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 未登录时跳转至登录界面
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (token || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router
