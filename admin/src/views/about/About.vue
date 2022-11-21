<!--
 * @Author: liuyx 1517482303@qq.com
 * @Date: 2022-11-15 10:36:30
 * @LastEditors: liuyx 1517482303@qq.com
 * @LastEditTime: 2022-11-21 17:46:46
 * @FilePath: \admin\src\views\about\About.vue
 * @Description: 关于我 的编辑
 *
 * Copyright (c) 2022 by liuyx 1517482303@qq.com, All Rights Reserved.
-->
<template>
  <el-card>
    <v-md-editor v-model="aboutText" placeholder="向大家介绍一下自己吧！" />
    <div class="about-submit-btn">
      <el-button color="#626aef" @click="submit">保 存</el-button>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const aboutText = ref('')

const submit = () => {
  ElMessage({
    message: aboutText.value,
    type: 'success'
  })
  console.log(aboutText.value)
}
</script>

<style lang="scss" scoped>
.v-md-editor {
  height: calc(100vh - 290px);
}
.about-submit-btn {
  margin-top: 20px;
  text-align: right;
}
</style>
