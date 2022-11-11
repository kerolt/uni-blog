<template>
  <header class="header">
    <el-menu
      :default-active="navActive"
      mode="horizontal"
      background-color="rgba(0, 0, 0, 0)"
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
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const navActive = ref('/')
const router = useRouter()

// 监听路由的变化，使得el-menu可以同步选中激活位置
watch(router.currentRoute, () => {
  navActive.value = router.currentRoute.value.path
  console.log(navActive.value)
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0px 2px #eee;
  background-color: #fff;
  padding: 0 30px;
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
