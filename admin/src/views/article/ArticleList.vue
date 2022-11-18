<template>
  <el-card>
    <el-table :data="articleList" style="width: 100%">
      <!-- 多选 -->
      <el-table-column type="selection" width="55" />
      <el-table-column prop="cover" label="文章图片">
        <template #default="scope">
          <el-image
            class="article-cover"
            :src="
              scope.row.cover
                ? scope.row.cover
                : 'https://static.talkxj.com/articles/c5cc2b2561bd0e3060a500198a4ad37d.png'
            "
          />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="文章标题" />
      <el-table-column prop="category" label="分类" />
      <el-table-column prop="tags" label="标签" />
      <el-table-column prop="views" label="浏览量" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="createTime" label="发表时间" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleUpdate(scope.$index, scope.row)">修改</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
const articleList = [
  {
    cover: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-6dqemx.jpg',
    title: '测试',
    category: '分类1',
    tags: '标签1',
    views: 0,
    type: '原创',
    createTime: '2022-11-17',
    updateTime: '2022-11-17'
  }
]
</script>

<style lang="scss" scoped></style>
