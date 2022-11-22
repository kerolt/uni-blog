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
        name: '首页',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/article',
        name: '发布文章',
        component: () => import('@/views/article/Article.vue')
      },
      {
        path: '/article-list',
        name: '文章列表',
        component: () => import('@/views/article/ArticleList.vue')
      },
      {
        path: '/tags',
        name: '标签管理',
        component: () => import('@/views/tag/Tag.vue')
      },
      {
        path: '/categories',
        name: '分类管理',
        component: () => import('@/views/category/Category.vue')
      },
      {
        path: '/page',
        name: '页面图片',
        component: () => import('@/views/page/Page.vue')
      },
      {
        path: '/about',
        name: '关于我',
        component: () => import('@/views/about/About.vue')
      },
      {
        path: '/user/list',
        name: '用户列表',
        component: () => import('@/views/user/UserList.vue')
      },
      {
        path: '/user/account',
        name: '账号设置',
        component: () => import('@/views/user/Account.vue')
      },
      {
        path: '/website',
        name: '网站管理',
        component: () => import('@/views/website/Website.vue')
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
