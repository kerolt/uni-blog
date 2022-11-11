<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <BlogList />
    </el-col>
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <UserInfo />
    </el-col>
  </el-row>
</template>

<script setup>
import BlogList from '../../components/BlogList.vue'
import UserInfo from '../../components/UserInfo.vue'
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
}
</style>
