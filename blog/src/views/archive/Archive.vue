<template>
  <Banner :bannerUrl="data.bannerUrl" />
  <div class="m-content">
    <el-card shadow="hover">Archives</el-card>
  </div>
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import { ref } from 'vue'

const data = ref({
  bannerUrl: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-1p38v3.png'
})
</script>

<style lang="scss" scoped></style>
