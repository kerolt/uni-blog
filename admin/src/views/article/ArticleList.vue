<template>
  <el-card>
    <el-button
      style="margin-bottom: 20px"
      type="danger"
      plain
      :disabled="isMultiple"
      @click="multipleDelete"
      >批量删除</el-button
    >
    <el-table
      :data="articleList"
      :border="true"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <!-- 多选 -->
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column prop="cover" label="文章图片" align="center">
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
      <el-table-column prop="title" label="文章标题" align="center" />
      <el-table-column prop="category" label="分类" align="center">
        <template #default="scope">
          <el-tag type="success">{{ scope.row.category }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="tags" label="标签" align="center">
        <template #default="scope">
          <el-tag v-for="tag in scope.row.tagList" :key="tag.id" style="margin: 0 6px 5px 0">
            {{ tag }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="views" label="浏览量" align="center" />
      <el-table-column prop="createTime" label="发表时间" align="center" />
      <el-table-column prop="updateTime" label="更新时间" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="primary" @click="updateArticle(scope.row.id)">修改</el-button>
          <el-button type="danger" @click="deleteArticle(scope.row.id)">删除</el-button>
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
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isMultiple = ref(true)
const multipleSelection = ref([])
const router = useRouter()
const articleList = [
  {
    id: 123,
    cover: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-6dqemx.jpg',
    title: '测试',
    category: '分类1',
    tagList: ['标签1', '标签2', '标签3'],
    views: 0,
    createTime: '2022-11-17',
    updateTime: '2022-11-17'
  },
  {
    id: 124,
    cover: 'https://typora-lyx.oss-cn-guangzhou.aliyuncs.com/typora/wallhaven-6dqemx.jpg',
    title: '测试',
    category: '分类1',
    tagList: ['标签1', '标签2', '标签3'],
    views: 0,
    createTime: '2022-11-17',
    updateTime: '2022-11-17'
  }
]
const paginition = ref({
  currentPage: 1,
  pageSize: 10,
  total: 40
})

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

const updateArticle = (id) => {
  router.push({
    name: '修改文章',
    params: {
      id
    }
  })
}

const deleteArticle = (id) => {
  console.log(id)
}

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped>
.pagination-container {
  margin-top: 25px;
  justify-content: flex-end;
}
</style>
