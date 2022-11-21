<template>
  <el-card>
    <el-form :model="websiteInfo" label-width="120px" label-position="left">
      <el-form-item label="选择头像">
        <el-upload
          :show-file-list="false"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture"
          class="avatar-uploader"
        >
          <img v-if="websiteInfo.avatar" :src="websiteInfo.avatar" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="网站名称">
        <el-input v-model="websiteInfo.name" class="m-form-item" />
      </el-form-item>
      <el-form-item label="网站作者">
        <el-input v-model="websiteInfo.author" class="m-form-item" />
      </el-form-item>
      <el-form-item label="网站简介">
        <el-input v-model="websiteInfo.intro" class="m-form-item" />
      </el-form-item>
      <el-form-item label="首页一言">
        <el-input v-model="websiteInfo.sentence" class="m-form-item" />
      </el-form-item>
      <el-form-item label="上线日期">
        <el-date-picker
          v-model="websiteInfo.date"
          type="date"
          class="m-form-item"
          placeholder="选择日期"
        />
      </el-form-item>
      <el-form-item label="网站公告">
        <el-input type="textarea" class="m-form-item" v-model="websiteInfo.notice" />
      </el-form-item>
      <el-form-item label="Github">
        <el-input v-model="websiteInfo.github" class="m-form-item" />
      </el-form-item>
      <el-form-item label="Gitee">
        <el-input v-model="websiteInfo.gitee" class="m-form-item" />
      </el-form-item>
      <el-form-item label="备案号">
        <el-input v-model="websiteInfo.icp" class="m-form-item" />
      </el-form-item>
      <el-form-item>
        <el-button color="#626aef" @click="submitWebsiteInfo">保 存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const websiteInfo = ref({
  avatar: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/avatar.jpg',
  name: 'Liuyx的个人博客',
  author: 'Liuyx',
  intro: '抓住现在',
  sentence: '过去与未来，存在于每个当下。',
  date: '',
  notice: '',
  github: 'https://github.com/liuyxcc',
  gitee: 'https://gitee.com/liuyxcc',
  icp: ''
})

const submitWebsiteInfo = () => {
  ElMessage({
    message: websiteInfo.value,
    type: 'success'
  })
  console.log(websiteInfo.value)
}
</script>

<style lang="scss" scoped>
.avatar-uploader,
.avatar,
.avatar-uploader-icon {
  width: 128px;
  height: 128px;
}

.m-form-item {
  width: 400px;
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
.el-date-editor.el-input {
  width: 400px;
  height: 40px;
}
.v-md-editor {
  height: calc(100vh - 500px);
}
</style>
