<template>
  <div class="header-container">
    <div class="navbar">
      <!-- 折叠按钮 -->
      <div class="hamburger-container" @click="toggleCollapse">
        <el-icon size="25px">
          <component :is="icon"></component>
        </el-icon>
      </div>
      <!-- 面包屑 -->
      <span class="page-name">{{ $route.name }}</span>
      <div class="right-navbar">
        <!-- 全屏按钮 -->
        <el-icon size="25px" class="screenfull" @click="toggleScreen">
          <FullScreen />
        </el-icon>
        <!-- 用户头像 -->
        <el-dropdown class="right-item">
          <span class="el-dropdown-link">
            <el-avatar :src="circleUrl" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <!-- 历史标签栏 -->
    <div class="tabs-container">
      <div class="tabs-content">
        <span
          v-for="item of store.tabList"
          :key="item.path"
          class="tabs-content-item"
          :class="isActive(item)"
          @click="goTo(item)"
        >
          {{ item.name }}
          <el-icon v-if="item.name !== '首页'" @click.stop="removeTab(item)" :size="18">
            <Close class="close-icon" />
          </el-icon>
        </span>
      </div>
      <div class="tabs-close" @click="closeAllTab">全部关闭</div>
    </div>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const route = useRoute()
const circleUrl = ref('https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/avatar.jpg')
const store = useStore()

const toggleCollapse = () => {
  store.changeCollapse()
}

const closeAllTab = () => {
  store.resetTab()
  router.replace('/home') // 关闭所有后“主页”依旧存在
}

const goTo = (item) => {
  router.push(item.path)
}

const removeTab = (item) => {
  store.removeTab(item)
  if (route.path === item.path) {
    router.replace(store.tabList[store.tabList.length - 1])
  }
}

const logout = () => {
  localStorage.clear()
  router.replace('/login')
  console.log('logout')
}

const toggleScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

const icon = computed(() => {
  return !store.collapse ? 'Fold' : 'Expand'
})

const isActive = computed(() => {
  return (item) => (item.path === route.path ? 'tabs-content-item-active' : '')
})

// 监听路由的变化，有变化时将其加入pinia中store里的tabList
watch(
  () => route.path,
  () => {
    // 只有当跳转的路由不在tabList中时才会添加至store中
    if (store.tabList.findIndex((item) => item.path === route.path) === -1) {
      store.tabList.push({ name: route.name, path: route.path })
    }
  }
)
</script>

<style lang="scss" scoped>
.header-container {
  padding: 0 10px;
  height: 100%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.32);
  height: 94px;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    padding: 10px;
    .page-name {
      padding: 5px;
      border-bottom: 3px solid #626aef;
      width: 85px;
      text-align: center;
    }
    .right-navbar {
      display: flex;
      justify-content: center;
      align-items: center;
      .right-item {
        margin-left: 10px;
      }
    }
  }
}
.tabs-container {
  display: flex;
  align-items: center;
  height: 32px;
  justify-content: space-between;
  font-size: 14px;
  padding: 5px;
  border-top: 1px dotted #a8a8a8;
  .tabs-content {
    text-align: center;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #a8a8a8;
      border-radius: 20px;
    }
    .tabs-content-item {
      cursor: pointer;
      margin-right: 5px;
      background-color: #eee;
      padding: 5px;
      border-radius: 5px;
      line-height: 27px;
      transition: all 0.4s ease;
      .close-icon {
        transition: all 0.2s ease-in-out;
      }
      .close-icon:hover {
        background-color: #bdb8b8;
        border-radius: 50%;
      }
    }
    .tabs-content-item-active {
      background-color: #626aef;
      color: #eee;
      border-radius: 5px;
    }
  }
  .tabs-close {
    cursor: pointer;
    border: 1px solid #d8dce5;
    padding: 2px;
  }
}
.el-icon svg {
  position: relative;
  top: 3px;
}
</style>
