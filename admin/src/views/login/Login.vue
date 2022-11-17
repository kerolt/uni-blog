<template>
  <div class="container">
    <div class="login-container">
      <h1>Login</h1>
      <el-form
        ref="formRef"
        :model="loginForm"
        status-icon
        :rules="rules"
        size="large"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="User"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formRef = ref()
const loginForm = ref({
  username: 'admin',
  password: 'admin'
})
const rules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名！',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！',
      trigger: 'blur'
    }
  ]
})

const submitForm = (formRef) => {
  formRef.validate((valid) => {
    if (valid) {
      // 如果表单校验成功并且用户名和密码正确，则将token存储起来，并跳转至首页
      if (loginForm.value.username === 'admin' && loginForm.value.password === 'admin') {
        localStorage.setItem('token', 'i have token!')
        router.replace('/')
      }
    } else {
      console.log('error')
    }
  })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2c3e50;
  .login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 470px;
    background-color: #34495e;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(33, 44, 55, 0.3);
    color: #eee;
    h1 {
      font-size: 45px;
      font-weight: 400;
      padding: 30px 0;
    }
    .login-form {
      width: 260px;
    }
    .el-input {
      background-color: #34495e;
      font-size: 15px;
      .el-input__wrapper {
        background-color: #34495e !important;
      }
    }
  }
}
.el-button {
  width: 100%;
}
</style>
