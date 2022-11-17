<template>
  <div class="hamburger-container" @click="toggleCollapse">
    <el-icon size="25px">
      <component :is="icon"></component>
    </el-icon>
  </div>
</template>

<script setup>
import { useStore } from '../../../store'
import { computed } from 'vue'

const store = useStore()

const icon = computed(() => {
  return !store.collapse ? 'Fold' : 'Expand'
})

const toggleCollapse = () => {
  store.changeCollapse()
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  cursor: pointer;
}
</style>
