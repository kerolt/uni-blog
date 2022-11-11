<template>
  <el-card shadow="hover">
    <div class="avatar">
      <el-avatar :size="100" :src="avatar" />
      <svg-icon name="gitee"></svg-icon>
      <svg-icon name="github"></svg-icon>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const avatar = ref('https://liuyxcc.github.io/img/avatar.png')
</script>

<style lang="scss" scoped>
.el-card {
  margin: 20px 0;
}
</style>
