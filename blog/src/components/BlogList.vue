<template>
  <el-card class="card-box" v-for="item in blogList" :key="item" shadow="hover">
    <div class="blog-item">
      <el-row>
        <!-- 文章图片 -->
        <el-col :span="10">
          <router-link :to="'/articles/' + item.id">
            <img :src="item.firstPicture" alt="" class="first-picture" />
          </router-link>
        </el-col>
        <!-- 文章标题和简述 -->
        <el-col :span="14">
          <div class="blog-container">
            <router-link :to="'/articles/' + item.id">
              <h3>{{ item.title }}</h3>
            </router-link>
            <div class="description">{{ item.description }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const blogList = ref([
  {
    id: 1,
    firstPicture: 'https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg',
    title: '测试',
    description: '这是一篇测试文章'
  },
  {
    id: 1,
    firstPicture: 'https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg',
    title: '测试',
    description: '这是一篇测试文章'
  },
  {
    id: 1,
    firstPicture: 'https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg',
    title: '测试',
    description: '这是一篇测试文章'
  },
  {
    id: 1,
    firstPicture: 'https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg',
    title: '测试',
    description: '这是一篇测试文章'
  },
  {
    id: 1,
    firstPicture: 'https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg',
    title: '测试',
    description: '这是一篇测试文章'
  }
])
</script>

<style lang="scss" scoped>
.card-box {
  margin: 20px 0;
}
.blog-item {
  display: flex;
  align-items: center;
  .first-picture {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: scale(1);
    transition: transform 1s ease 0s;
    overflow: hidden;
  }
  &:hover .first-picture {
    transform: scale(1.1);
  }
  .blog-container {
    padding: 20px 20px 20px 40px;
    height: 100%;
    box-sizing: border-box;
    .description {
      margin-top: 15px;
    }
  }
}
</style>
