<template>
  <div
    class="m-banner animate__animated animate__slideInDown"
    :style="{ background: 'url(' + props.bannerUrl + ') center center / cover no-repeat' }"
  ></div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  bannerUrl: String
})
</script>

<style lang="scss" scoped></style>
