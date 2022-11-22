<template>
  <el-card>
    <el-table :data="authorityTable" border style="width: 100%">
      <el-table-column prop="name" label="角色名" align="center" />
      <el-table-column prop="tag" label="权限标签" align="center">
        <template #default="scope">
          <el-tag :type="scope.row.tag !== 'admin' ? '' : 'success'" disable-transitions>{{
            scope.row.tag
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <el-button color="#626AEF" plain @click="authorityDialogVisible = true">权限设置</el-button>
      </el-table-column>
    </el-table>
    <!-- 后台权限设置弹窗 -->
    <el-dialog
      v-model="authorityDialogVisible"
      title="后台权限设置"
      width="30%"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button color="#626AEF" plain @click="authorityDialogVisible = false"
            >Cancel</el-button
          >
          <el-button color="#626AEF" @click="authorityDialogVisible = false"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
const authorityTable = [
  {
    name: '管理员',
    tag: 'admin'
  },
  {
    name: '用户',
    tag: 'user'
  },
  {
    name: '测试',
    tag: 'test'
  }
]
const authorityDialogVisible = ref(false)
</script>

<style lang="scss" scoped></style>
