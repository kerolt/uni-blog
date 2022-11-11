<template>
  <el-card shadow="hover" class="user-info">
    <!-- 头像 -->
    <div class="avatar">
      <el-avatar :size="100" :src="userInfo.avatar" />
    </div>
    <!-- 名称 -->
    <h2>{{ userInfo.name }}</h2>
    <!-- 简述 -->
    <p>{{ userInfo.description }}</p>
    <!-- 分类统计 -->
    <div class="classification">
      <div class="class-item">
        <router-link to="/tags">
          <div>标签</div>
          <div class="class-item-nums">{{ userInfo.tags }}</div>
        </router-link>
      </div>
      <div class="class-item">
        <router-link to="/categories">
          <div>分类</div>
          <div class="class-item-nums">{{ userInfo.categories }}</div>
        </router-link>
      </div>
      <div class="class-item">
        <router-link to="/archives">
          <div>归档</div>
          <div class="class-item-nums">{{ userInfo.archives }}</div>
        </router-link>
      </div>
    </div>
    <!-- 一些图标 -->
    <div class="icons">
      <a :href="userInfo.github"><svg-icon name="github"></svg-icon></a>&nbsp;
      <a :href="userInfo.gitee"><svg-icon name="gitee"></svg-icon></a>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const userInfo = ref({
  name: 'Liuyx',
  avatar: 'https://liuyxcc.github.io/img/avatar.png',
  description: '抓住现在，做好自己',
  tags: 0,
  categories: 0,
  archives: 0,
  github: 'https://github.com/liuyxcc',
  gitee: 'https://gitee.com/liuyxcc'
})
</script>

<style lang="scss" scoped>
.el-card {
  margin: 20px 0;
}
.user-info {
  padding: 10px;
  text-align: center;
  position: sticky;
  top: 10px;
  .avatar {
  }
  .classification {
    display: flex;
    padding: 20px 10px;
    box-sizing: border-box;
    .class-item {
      width: 33.3%;
      .class-item-nums {
        line-height: 40px;
        height: 40px;
      }
    }
  }
  .icons {
    margin-top: 10px;
  }
}
</style>
