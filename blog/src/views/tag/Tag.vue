<template>
  <Banner :bannerUrl="data.bannerUrl" />
  <div class="m-content">
    <el-card shadow="hover">Tags</el-card>
  </div>
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import { ref } from 'vue'

const data = ref({
  bannerUrl: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-kxw3p1.jpg'
})
</script>

<style lang="scss" scoped></style>
