<template>
  <Banner :bannerUrl="data.bannerUrl" />
  <div class="m-content">
    <el-card shadow="hover" class="aboutme">
      <v-md-preview :text="blog"></v-md-preview>
    </el-card>
  </div>
</template>

<script setup>
import Banner from '@/components/Banner.vue'
import { ref } from 'vue'

const data = ref({
  bannerUrl: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-p931d9.png'
})

const blog = `
## Welcome!

Hello！欢迎来到我的个人博客！
~~~js
console.log('Hello World')
~~~
`
</script>

<style lang="scss" scoped>
.aboutme {
  margin: 20px 0;
}
</style>
