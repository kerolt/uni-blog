<!--
 * @Author: liuyx 1517482303@qq.com
 * @Date: 2022-11-15 10:36:30
 * @LastEditors: liuyx 1517482303@qq.com
 * @LastEditTime: 2022-11-21 17:19:54
 * @FilePath: \admin\src\views\about\About.vue
 * @Description: 关于我 的编辑
 *
 * Copyright (c) 2022 by liuyx 1517482303@qq.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div class="top">
      <!-- 上传头像 -->
      <div class="upload">
        <el-upload
          :show-file-list="false"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture"
          class="avatar-uploader"
        >
          <img v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
        <div style="text-align: center; height: 50px; line-height: 50px">上传头像</div>
      </div>
      <el-form :model="userInfo" label-width="120px" label-position="left">
        <el-form-item label="昵称">
          <el-input v-model="userInfo.name" />
        </el-form-item>
        <el-form-item label="首页一言">
          <el-input v-model="userInfo.sentence" />
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="userInfo.state" />
        </el-form-item>
        <el-form-item label="Github">
          <el-input v-model="userInfo.github" />
        </el-form-item>
        <el-form-item label="Gitee">
          <el-input v-model="userInfo.gitee" />
        </el-form-item>
      </el-form>
      <el-button
        color="#626aef"
        style="position: absolute; right: 50px; width: 100px"
        @click="submitUserInfo"
        >保 存</el-button
      >
    </div>
    <v-md-editor v-model="userInfo.about" placeholder="向大家介绍一下自己吧！" />
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const userInfo = ref({
  avatarUrl: 'https://liuyxcc.github.io/img/avatar.png',
  name: 'Liuyx',
  sentence: '过去与未来，存在于每个当下。',
  state: '抓住现在',
  github: 'https://github.com/liuyxcc',
  gitee: 'https://gitee.com/liuyxcc',
  about: ''
})

const submitUserInfo = () => {
  ElMessage({
    message: userInfo.value,
    type: 'success'
  })
  console.log(userInfo.value)
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  .avatar-uploader .avatar {
    width: 128px;
    height: 128px;
    display: block;
  }
  .el-form {
    padding-left: 50px;
    box-sizing: border-box;
    width: 550px;
  }
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
  margin-right: 20px;
}
.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 128px;
  height: 128px;
  text-align: center;
}
.v-md-editor {
  height: calc(100vh - 500px);
}
</style>
