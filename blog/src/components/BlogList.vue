<template>
  <el-card class="box-card" v-for="o in 10" :key="o" shadow="hover">
    <div>{{ 'Blog ' + o }}</div>
  </el-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.box-card {
  margin: 20px 0;
}
</style>
