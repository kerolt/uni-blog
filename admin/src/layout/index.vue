<template>
  <el-container>
    <el-aside width="auto">
      <Menu />
    </el-aside>
    <el-container :class="'main-container ' + isHide">
      <el-header><Header /></el-header>
      <el-main>
        <router-view class="m-content" v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import { useStore } from '../store'
import { computed } from 'vue'

const store = useStore()

const isHide = computed(() => {
  return store.collapse ? 'hide-sideBar' : ''
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
}
.main-container {
  transition: margin-left 0.45s;
  margin-left: 210px;
  min-height: 100vh;
}

.hide-sideBar {
  margin-left: 64px;
}

// 路由切换时的动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
