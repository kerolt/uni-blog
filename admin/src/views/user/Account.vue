<template>
  <el-card>
    <!-- 选择对应的账号 -->
    <el-select v-model="account.value" placeholder="请选择类型" size="large" @change="selectChange">
      <el-option v-for="op in options" :key="op.id" :value="op.id" :label="op.value" />
    </el-select>
    <el-tabs type="border-card">
      <!-- 基本信息修改 -->
      <el-tab-pane label="修改基本信息">
        <el-form label-width="120px" label-position="left">
          <el-form-item label="选择头像">
            <el-upload
              :show-file-list="false"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              list-type="picture"
              class="avatar-uploader"
            >
              <img v-if="accountInfo.avatar" :src="accountInfo.avatar" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="accountInfo.name" class="m-form-item" />
          </el-form-item>
          <el-form-item>
            <el-button color="#626aef" @click="updateBasicInfo">修 改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!-- 密码修改 -->
      <el-tab-pane label="修改密码">
        <el-form label-width="120px" label-position="left">
          <el-form-item label="旧密码">
            <el-input v-model="passwordInfo.oldPwd" type="password" class="m-form-item" />
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="passwordInfo.newPwd" type="password" class="m-form-item" />
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="passwordInfo.againPwd" type="password" class="m-form-item" />
          </el-form-item>
          <el-form-item>
            <el-button color="#626aef" @click="updatePassword">修 改</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const account = ref({
  id: 0,
  value: '管理员'
})
const options = [
  {
    id: 0,
    value: '管理员'
  },
  {
    id: 1,
    value: '测试'
  }
]
const accountInfo = ref({
  avatar: '',
  name: ''
})
const passwordInfo = ref({
  oldPwd: '',
  newPwd: '',
  againPwd: ''
})

const selectChange = (val) => {
  account.value.id = val
  account.value.value = val === 0 ? '管理员' : '测试'
}

const updateBasicInfo = () => {
  console.log({
    id: account.value.id,
    avatar: accountInfo.value.avatar,
    name: accountInfo.value.name
  })
}

const updatePassword = () => {
  console.log({
    id: account.value.id,
    oldPwd: passwordInfo.value.oldPwd,
    newPwd: passwordInfo.value.newPwd,
    againPwd: passwordInfo.value.againPwd
  })
}
</script>

<style lang="scss" scoped>
.el-select {
  margin-bottom: 20px;
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
</style>
