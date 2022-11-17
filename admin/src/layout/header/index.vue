<template>
  <div class="header-container">
    <div class="navbar">
      <Hamburger />
      <div class="right-navbar">
        <Screenfull />
        <Avatar class="right-item" />
      </div>
    </div>
    <div class="tabs-view-container">tabs</div>
  </div>
</template>

<script setup>
import Hamburger from './components/Hamburger.vue'
import Avatar from './components/Avatar.vue'
import Screenfull from './components/Screenfull.vue'
</script>

<style lang="scss" scoped>
.header-container {
  padding: 0 10px;
  height: 100%;
  box-shadow: 0 2px 3px #888888;
  height: 60px;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right-navbar {
      display: flex;
      justify-content: center;
      align-items: center;
      .right-item {
        margin-left: 10px;
      }
    }
  }
}
</style>
