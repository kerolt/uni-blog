<template>
  <Header />
  <!-- <div class="home-banner" v-if="$router.currentRoute.value.path === '/'"></div>
  <main class="main-wrap">
    <div class="content">
      <router-view></router-view>
    </div>
  </main> -->
  <main>
    <router-view></router-view>
  </main>
  <Footer />
  <el-backtop :right="50" :bottom="70" :visibility-height="100" />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" scoped>
// .main-wrap {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 10px 0;
//   .content {
//     width: 65%;
//     // margin-top: 50px;
//   }
// }
</style>
