<template>
  <div class="home-banner animate__animated animate__fadeIn"></div>
  <div class="m-content">
    <el-row :gutter="20">
      <el-col :span="18">
        <BlogList />
      </el-col>
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple" />
        <UserInfo />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import BlogList from '../../components/BlogList.vue'
import UserInfo from '../../components/UserInfo.vue'
</script>

<style lang="scss" scoped>
.home-banner {
  background: url('https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-x6l5vl.jpg')
    center center / cover no-repeat;
  height: 100vh;
}
</style>
