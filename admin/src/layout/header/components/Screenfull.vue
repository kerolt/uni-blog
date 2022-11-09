<template>
  <el-icon size="25px" class="screenfull" @click="toggleScreen">
    <FullScreen />
  </el-icon>
</template>

<script setup>
import screenfull from 'screenfull'

// 利用screenfull插件实现全屏展示
const toggleScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
</script>

<style lang="scss" scoped>
.screenfull {
  cursor: pointer;
}
</style>
