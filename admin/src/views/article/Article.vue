<template>
  <el-card>
    <el-form>
      <el-form-item>
        <el-row :gutter="20" style="width: 100%">
          <el-col :span="20">
            <span style="box-shadow: 1 0 1px #c0c4cc"
              ><el-input v-model="article.title" placeholder="请输入博客标题"
            /></span>
          </el-col>
          <el-col :span="4">
            <el-button
              color="#626aef"
              style="width: 100%; height: 100%"
              @click="publishDialogVisible = true"
              >发布文章</el-button
            >
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <v-md-editor
          v-model="article.content"
          height="calc(100vh - 290px)"
          placeholder="在vuepress主题中, 您可以使用tip功能噢~"
        />
      </el-form-item>
    </el-form>
    <!-- 在弹窗中选择标签、分类、文章图片 -->
    <el-dialog v-model="publishDialogVisible" title="后台权限设置" width="40%">
      <el-form :model="article" label-position="left">
        <!-- 文章分类 -->
        <el-form-item label="文章分类">
          <el-tag
            type="success"
            v-show="article.category"
            :closable="true"
            size="large"
            @close="removeCategory"
          >
            {{ article.category }}
          </el-tag>
          <!-- 分类选项 -->
          <el-popover
            v-if="!article.category"
            placement="bottom-start"
            :width="400"
            trigger="click"
            :hide-after="50"
          >
            <div class="popover-title">分类</div>
            <template #reference>
              <el-button type="success" plain>添加分类</el-button>
            </template>
            <div class="popover-container">
              <div
                v-for="item of categoryList"
                :key="item.id"
                class="category-item"
                @click="addCategory(item)"
              >
                {{ item.name }}
              </div>
            </div>
          </el-popover>
        </el-form-item>
        <!-- 文章标签 -->
        <el-form-item label="文章标签">
          <el-tag
            v-for="item in article.tagList"
            :key="item.id"
            :closable="true"
            size="large"
            style="margin-right: 8px"
            @close="removeTag(item)"
          >
            {{ item.name }}
          </el-tag>
          <!-- 标签选项 -->
          <el-popover
            v-if="article.tagList.length < 3"
            placement="bottom-start"
            :width="400"
            trigger="click"
            :hide-after="50"
          >
            <template #reference>
              <el-button type="primary" plain>添加标签</el-button>
            </template>
            <div class="popover-title">标签</div>
            <div class="popover-container">
              <el-tag v-for="item of tagList" :key="item.id" class="tag-item" @click="addTag(item)">
                {{ item.name }}
              </el-tag>
            </div>
          </el-popover>
        </el-form-item>
        <!-- 文章封面 -->
        <el-form-item label="上传封面">
          <Upload :url="article.cover" :width="360" :height="180" @upload="upload" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button color="#626AEF" plain @click="publishDialogVisible = false">取消</el-button>
          <el-button color="#626AEF" @click="publishArticle"> 发布 </el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Upload from '@/components/Upload.vue'
// import axios from 'axios'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const article = ref({
  id: null,
  cover: '',
  title: '',
  content: '',
  tagList: [],
  category: ''
})
const publishDialogVisible = ref(false) // 发布弹窗的可视与否
const categoryList = ref([
  {
    id: 1,
    name: '工具'
  },
  {
    id: 2,
    name: 'Vue'
  },
  {
    id: 3,
    name: '面试'
  }
])
const tagList = ref([
  {
    id: 1,
    name: 'JS'
  },
  {
    id: 2,
    name: 'Linux'
  },
  {
    id: 3,
    name: 'Vite'
  }
])

onMounted(() => {
  if (route.params.id) {
    axios.get('/api/article/' + route.params.id).then((res) => {
      console.log(res)
      article.value = res.data
    })
  }
})

const removeCategory = () => {
  article.value.category = null
}

const addCategory = (item) => {
  article.value.category = item.name
}

const addTag = (item) => {
  if (
    article.value.tagList.length < 3 &&
    article.value.tagList.findIndex((it) => it.id === item.id) === -1
  ) {
    article.value.tagList.push(item)
  }
}

const removeTag = (item) => {
  const idx = article.value.tagList.findIndex((it) => it.id === item.id)
  article.value.tagList.splice(idx, 1)
}

const publishArticle = () => {
  publishDialogVisible.value = false
  console.log(article.value)
}

const upload = (url) => {
  // 将子组件Upload中获取的图片url赋值给article的cover
  article.value.cover = url
}
</script>

<style lang="scss" scoped>
.popover-title {
  text-align: center;
  margin-bottom: 10px;
}
.popover-container {
  margin-top: 1rem;
  height: 200px;
  overflow-y: auto;
  .category-item {
    cursor: pointer;
    padding: 0.6rem 0.5rem;
  }
  .category-item:hover {
    background-color: #f0f9eb;
    color: #67c23a;
  }
  .tag-item {
    cursor: pointer;
    margin-right: 8px;
  }
}
</style>
