<template>
  <el-card>
    <el-row :gutter="12">
      <el-col v-for="page of pageList" :key="page.id" :md="8">
        <div class="page-item">
          <!-- 对图片的操作 -->
          <div class="page-opreation">
            <el-dropdown trigger="click">
              <el-icon color="#eee"><More /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="showDialog(page.id)"> 编辑 </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <el-image
            :src="page.pageCover"
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
          <Upload :url="pageForm.url" :width="360" :height="180" />
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
import axios from 'axios'

const pageList = ref([])
const pageForm = ref({
  url: ''
})
const dialogVisible = ref(false)

onMounted(() => {
  axios.get('/api/pages').then((res) => {
    console.log(res.data)
    pageList.value = res.data
  })
})

const showDialog = (id) => {
  dialogVisible.value = true
  pageForm.value.url = 'http://rlr92qkze.hn-bkt.clouddn.com/blog1669209793366.png'
  console.log(id)
}

const updatePage = () => {
  dialogVisible.value = false
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
