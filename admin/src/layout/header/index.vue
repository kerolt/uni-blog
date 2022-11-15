<template>
  <div class="header-container">
    <div class="navbar">
      <Hamburger />
      <div class="navbar-right">
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
  padding: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 3px #888888;
  .navbar {
    height: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    .navbar-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      overflow: hidden;
      margin-right: 15px;
      :deep(.right-item) {
        display: inline-block;
        margin-left: 18px;
        font-size: 22px;
        color: #5a5e66;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
  }
  .tabs-view-container {
    height: 35px;
  }
}
</style>
