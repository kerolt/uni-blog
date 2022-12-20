<template>
  <el-card>
    <el-row :gutter="12">
      <el-col v-for="page of pageList" :key="page._id" :md="8">
        <div class="page-item">
          <!-- 对图片的操作 -->
          <div class="page-opreation">
            <el-dropdown trigger="click">
              <el-icon color="#eee"><More /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="showDialog(page._id)"> 编辑 </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <el-image
            :src="page.bannerUrl"
            class="page-cover"
            placeholder="别急，图片马上出来~"
          ></el-image>
          <div class="page-name">{{ page.pageName }}</div>
        </div>
      </el-col>
    </el-row>
    <el-dialog v-model="dialogVisible" width="40%" style="z-index: 9999">
      <el-form :model="pageForm" label-width="150px" label-position="left">
        <el-form-item label="上传页面图片">
          <Upload :url="pageForm.bannerUrl" :width="340" :height="180" @upload="upload" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false"> 取消 </el-button>
          <el-button type="primary" @click="updatePage"> 修改 </el-button>
        </span>
      </template></el-dialog
    >
  </el-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Upload from '@/components/Upload.vue'
import { getPageList, updatePageBannerUrl } from '@/api/page'
import { ElMessage } from 'element-plus'

const pageList = ref([])
const pageForm = ref({
  _id: '',
  bannerUrl: ''
})
const dialogVisible = ref(false)

onMounted(() => {
  getPages()
})

const getPages = async () => {
  const { data } = await getPageList()
  pageList.value = data
}

const showDialog = (id) => {
  dialogVisible.value = true
  pageForm.value._id = id
  pageForm.value.bannerUrl = pageList.value.filter((item) => item._id === id)[0].bannerUrl
}

const updatePage = async () => {
  const { code, message } = await updatePageBannerUrl(pageForm.value)
  ElMessage({
    type: code === 200 ? 'success' : 'warn',
    message
  })
  dialogVisible.value = false
  getPages()
}

const upload = (url) => {
  pageForm.value.bannerUrl = url
}
</script>

<style lang="scss" scoped>
.page-item {
  margin: 0 10px 20px 0;
  cursor: pointer;
  position: relative;
  .page-opreation {
    position: absolute;
    right: 1.4em;
    top: 1em;
    z-index: 999;
  }
  .page-cover {
    position: relative;
    width: 100%;
    height: 256px;
    border-radius: 5px;
  }
  .page-name {
    text-align: center;
  }
}
.el-icon {
  font-size: 22px;
}
</style>
