<template>
  <el-upload
    class="avatar-uploader"
    action="https://upload-z2.qiniup.com"
    :show-file-list="false"
    :http-request="up2qiniu"
    :before-upload="beforeUpload"
  >
    <img
      v-if="props.url"
      :src="props.url"
      class="avatar"
      :style="'width: ' + props.width + 'px;' + 'height: ' + props.height + 'px;'"
    />
    <el-icon
      v-else
      class="avatar-uploader-icon"
      :style="'width: ' + props.width + 'px;' + 'height: ' + props.height + 'px;'"
      ><Plus
    /></el-icon>
  </el-upload>
</template>

<script setup>
import { ref } from 'vue'
import { getQiniuToken } from '../api/token'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const qiniuaddr = 'cdn.liuyx.cc'
const imageUrl = ref('')
// 父组件传值时，须有图片的url；其次可选择图片的宽高（默认都为180）
const props = defineProps({
  url: String,
  width: {
    type: Number,
    default: 180
  },
  height: {
    type: Number,
    default: 180
  }
})
const emit = defineEmits(['upload'])

const beforeUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('图片格式应该是png或jpg')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小应该小于2MB')
    return false
  }
  return true
}

/**
 * 上传图片至七牛云
 * @param {*} req
 */
const up2qiniu = async (req) => {
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  const fileType = req.file.type === 'image/png' ? 'png' : 'jpg'
  // 重命名要上传的文件
  const keyname = 'blog' + new Date().getTime() + '.' + fileType
  const res = await getQiniuToken()
  const formdata = new FormData()
  formdata.append('file', req.file)
  formdata.append('token', res.data)
  formdata.append('key', keyname)
  // 获取到凭证之后再将文件上传到七牛云空间
  axios.post('https://upload-z2.qiniup.com', formdata, config).then((res) => {
    imageUrl.value = 'http://' + qiniuaddr + '/' + res.data.key
    emit('upload', imageUrl.value) // 向父组件传递图片的url
  })
}
</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 360px;
  height: 180px;
  display: block;
}
.avatar-uploader :deep(.el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader :deep(.el-upload:hover) {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 360px;
  height: 180px;
  text-align: center;
}
</style>
