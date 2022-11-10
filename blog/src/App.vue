<template>
  <Header />
  <main class="main-wrap">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="17">
          <router-view></router-view>
        </el-col>
        <el-col :span="7"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
    </div>
  </main>
  <Footer />
  <el-backtop :right="50" :bottom="70" :visibility-height="100" />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" scoped>
.main-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  .content {
    width: 75%;
  }
}
</style>
