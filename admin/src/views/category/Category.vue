<!--
 * @Author: liuyx 1517482303@qq.com
 * @Date: 2022-11-15 10:36:14
 * @LastEditors: liuyx 1517482303@qq.com
 * @LastEditTime: 2022-11-19 20:01:27
 * @FilePath: \admin\src\views\category\Category.vue
 * @Description: 分类管理
 *
 * Copyright (c) 2022 by liuyx 1517482303@qq.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div class="operation-container">
      <el-button type="primary"
        ><el-icon><Plus /></el-icon>新增</el-button
      >
    </div>
    <el-table :data="articleList" style="width: 100%">
      <!-- 多选 -->
      <el-table-column type="selection" width="55" />
      <el-table-column prop="cover" label="分类名称" />
      <el-table-column prop="title" label="文章量" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleUpdate(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.operation-container {
  margin: 10px 0 20px 0;
}
</style>
