<template>
  <el-card>
    <el-table :data="userList" border style="width: 100%">
      <el-table-column prop="avatar" label="头像" align="center">
        <template #default="scope">
          <el-image
            class="user-avatar"
            :src="
              scope.row.avatar
                ? scope.row.avatar
                : 'https://static.talkxj.com/articles/c5cc2b2561bd0e3060a500198a4ad37d.png'
            "
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="昵称" align="center" />
      <el-table-column prop="loginMethod" label="登录方式" align="center" />
      <el-table-column prop="role" label="用户角色" align="center" />
      <el-table-column prop="lastDate" label="上次登录时间" align="center" />
    </el-table>
  </el-card>
</template>

<script setup>
const userList = [
  {
    avatar: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/avatar.jpg',
    name: 'Liuyx',
    loginMethod: '邮箱',
    role: '用户',
    lastDate: '2022-11-22'
  },
  {
    avatar: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/avatar.jpg',
    name: 'Liuyx',
    loginMethod: '邮箱',
    role: '用户',
    lastDate: '2022-11-22'
  },
  {
    avatar: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/avatar.jpg',
    name: 'Liuyx',
    loginMethod: '邮箱',
    role: '用户',
    lastDate: '2022-11-22'
  },
  {
    avatar: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/avatar.jpg',
    name: 'Liuyx',
    loginMethod: '邮箱',
    role: '用户',
    lastDate: '2022-11-22'
  }
]
</script>

<style lang="scss" scoped>
.user-avatar {
  width: 50px;
  height: 50px;
}
</style>
