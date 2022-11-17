<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :src="circleUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const circleUrl = ref('https://liuyxcc.github.io/img/avatar.png')

const logout = () => {
  localStorage.clear()
  router.replace('/login')
  console.log('logout')
}
</script>

<style lang="scss" scoped></style>
