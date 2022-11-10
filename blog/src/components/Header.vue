<template>
  <header class="header">
    <el-menu
      default-active="/"
      mode="horizontal"
      background-color="#FFF"
      text-color="#000"
      active-text-color="#5698c3"
      @select="handleSelect"
      router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/tags">标签</el-menu-item>
      <el-menu-item index="/categories">分类</el-menu-item>
      <el-menu-item index="/archives">归档</el-menu-item>
      <el-menu-item index="/about">关于我</el-menu-item>
    </el-menu>
    <div class="right-header">
      <el-input v-model="input" placeholder="Please input" />
      <el-button type="primary" :icon="Search" circle />
      <div>登录</div>
    </div>
  </header>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px 2px #eee;
  padding: 0 20px;
  box-sizing: border-box;
}
.right-header {
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: end;
  .el-input {
    width: 50%;
  }
}
.el-menu {
  box-shadow: 0px 2px #eee;
  width: 60%;
}
.el-menu-item {
  font-size: 17px;
  font-weight: 600;
}
</style>
