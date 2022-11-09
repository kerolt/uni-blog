<template>
  <el-container class="app-wrapper">
    <el-aside width="210px">
      <Menu />
    </el-aside>
    <el-container class="main-container" :class="{ hidderContainer: store.collapse }">
      <el-header><Header /></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './menu/Menu.vue'
import Header from './header/Header.vue'
import { useStore } from '../store'

const store = useStore()
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
}
.main-container {
  width: calc(100% - 210px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.45s;
  &.hidderContainer {
    // 当store中的collapse为true时，重新计算main-container的宽度
    width: calc(100% - 65px);
  }
}
// 页面展示时对element-ui的样式做一点修改
.el-menu {
  height: 100%;
}
.el-header {
  height: 85px;
  padding: 0;
}
</style>
