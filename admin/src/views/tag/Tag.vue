<!--
 * @Author: liuyx 1517482303@qq.com
 * @Date: 2022-11-15 10:35:54
 * @LastEditors: liuyx 1517482303@qq.com
 * @LastEditTime: 2022-11-21 17:46:38
 * @FilePath: \admin\src\views\tag\Tag.vue
 * @Description: 标签管理
 *
 * Copyright (c) 2022 by liuyx 1517482303@qq.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div class="operation-container">
      <el-button type="primary" @click="openDialog"
        ><el-icon><Plus /></el-icon>新增</el-button
      >
      <el-button type="danger" plain :disabled="isMultiple" @click="multipleDelete"
        >批量删除</el-button
      >
    </div>
    <el-table :data="tagList" style="width: 100%" border @selection-change="handleSelectionChange">
      <!-- 多选 -->
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="name" label="标签名称" align="center" />
      <el-table-column prop="articleNum" label="文章量" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="primary" @click="updateTag(scope.row.id)">修改</el-button>
          <el-button type="danger" @click="deleteTag(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination-container"
      v-model:current-page="paginition.currentPage"
      v-model:page-size="paginition.pageSize"
      :page-sizes="[10, 20]"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="paginition.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <!-- “新增标签”对话框 -->
    <el-dialog v-model="dialogVisible" title="新增标签" width="30%">
      <el-form :model="categoryFrom" label-width="120px" label-position="left" class="dialog-form">
        <el-form-item label="名称" label-width="auto">
          <el-input v-model="categoryFrom.name"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

const isMultiple = ref(true)
const multipleSelection = ref([])
const tagList = [
  {
    id: 0,
    name: 'Vue3',
    articleNum: 5
  },
  {
    id: 1,
    name: 'JavaScript',
    articleNum: 5
  },
  {
    id: 2,
    name: 'ElementPlus',
    articleNum: 5
  }
]
const categoryFrom = ref({
  name: ''
})
const paginition = ref({
  currentPage: 1,
  pageSize: 10,
  total: 40
})
const dialogVisible = ref(false)

const multipleDelete = () => {
  console.log(multipleSelection.value)
}

const handleSelectionChange = (selection) => {
  // 当选择项发生变化时，multipleSelection数组中的值变为selection
  multipleSelection.value = selection
  if (multipleSelection.value.length <= 0) {
    isMultiple.value = true
  } else {
    isMultiple.value = false
  }
}

const updateTag = (id) => {
  console.log(id)
}

const deleteTag = (id) => {
  console.log(id)
}

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

const openDialog = () => {
  dialogVisible.value = true
  categoryFrom.value.name = ''
}
</script>

<style lang="scss" scoped>
.operation-container {
  margin: 10px 0 20px 0;
}
.pagination-container {
  margin-top: 25px;
  justify-content: flex-end;
}
.dialog-form {
  padding: 10px;
  .el-input {
    width: 350px;
    margin-left: 15px;
  }
}
</style>
