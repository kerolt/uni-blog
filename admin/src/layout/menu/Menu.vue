<template>
  <el-menu
    active-text-color="#409EFF"
    background-color="#304156"
    default-active="1"
    text-color="#fff"
    unique-opened="true"
    :collapse="store.collapse"
  >
    <!-- 首页栏 -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </template>
      <el-menu-item index="1-1">首页展示</el-menu-item>
    </el-sub-menu>
    <!-- 文章管理  -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Document /></el-icon>
        <span>文章管理</span>
      </template>
      <el-menu-item index="2-1">发布文章</el-menu-item>
      <el-menu-item index="2-2">文章列表</el-menu-item>
      <el-menu-item index="2-3">标签管理</el-menu-item>
      <el-menu-item index="2-4">分类管理</el-menu-item>
    </el-sub-menu>
    <!-- 用户管理  -->
    <el-sub-menu index="3">
      <template #title>
        <el-icon><UserFilled /></el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item index="3-1">用户列表</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { HomeFilled, Document, UserFilled } from '@element-plus/icons-vue'
import { useStore } from '../../store'

const store = useStore()
</script>

<style lang="scss" scoped></style>
