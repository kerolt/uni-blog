<template>
  <el-menu
    active-text-color="#626AEF"
    background-color="#444444"
    :default-active="$router.currentRoute.value.path"
    text-color="#fff"
    :unique-opened="true"
    :collapse="store.collapse"
    :router="true"
    class="side-nav-bar"
  >
    <!-- 首页栏 -->
    <el-menu-item index="/home">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <!-- 文章管理  -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Document /></el-icon>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/article">发布文章</el-menu-item>
      <el-menu-item index="/article-list">文章列表</el-menu-item>
      <el-menu-item index="/tags">标签管理</el-menu-item>
      <el-menu-item index="/categories">分类管理</el-menu-item>
    </el-sub-menu>
    <!-- 系统管理 -->
    <el-sub-menu index="3">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/website">网站管理</el-menu-item>
      <el-menu-item index="/page">页面图片</el-menu-item>
      <el-menu-item index="/about">关于我</el-menu-item>
    </el-sub-menu>
    <!-- 用户管理  -->
    <el-sub-menu index="4">
      <template #title>
        <el-icon><UserFilled /></el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/users">用户列表</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { HomeFilled, Document, UserFilled, Setting } from '@element-plus/icons-vue'
import { useStore } from '../../store'

const store = useStore()
</script>

<style lang="scss" scoped>
.side-nav-bar:not(.el-menu--collapse) {
  width: 210px;
}
.side-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

<style>
.el-menu-item {
  transition: all 0.15s ease-in-out;
}
.el-menu-item.is-active {
  font-weight: bold;
}
</style>
