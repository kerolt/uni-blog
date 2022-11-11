<template>
  <el-card shadow="hover" class="article">
    <v-md-preview :text="blog"></v-md-preview>
  </el-card>
</template>

<script setup>
const blog = `
## 测试

这是一篇测试文章~
这是一篇测试文章~
这是一篇测试文章~
这是一篇测试文章~
这是一篇测试文章~

~~~js
console.log('这是一篇测试文章~')
~~~
`
</script>

<style lang="scss" scoped>
.article {
  margin: 20px 0;
}
</style>
