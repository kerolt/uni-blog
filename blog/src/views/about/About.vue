<template>
  <el-card shadow="hover" class="aboutme">
    <v-md-preview :text="blog"></v-md-preview>
  </el-card>
</template>

<script setup>
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
