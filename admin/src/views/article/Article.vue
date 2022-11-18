<template>
  <el-card>
    <el-form>
      <el-form-item>
        <el-row :gutter="20" style="width: 100%">
          <el-col :span="20">
            <span style="box-shadow: 1 0 1px #c0c4cc"
              ><el-input v-model="blog.title" placeholder="请输入博客标题"
            /></span>
          </el-col>
          <el-col :span="4">
            <el-button color="#626aef" style="width: 100%; height: 100%">发布文章</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <v-md-editor
          v-model="blog.article"
          height="calc(100vh - 270px)"
          placeholder="在vuepress主题中, 您可以使用tip功能噢~"
        />
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const blog = ref({
  title: '',
  article: ''
})
</script>

<style lang="scss" scoped></style>
