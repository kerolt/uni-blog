<template>
  <el-row :gutter="20">
    <el-col :span="18">
      <el-card shadow="hover" class="article">
        <v-md-preview :text="blog" ref="preview"></v-md-preview>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" class="directory">
        <h3>目录</h3>
        <div
          v-for="anchor in directory"
          :key="anchor"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
          @click="handleAnchorClick(anchor)"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const blog = `
## 二级标题

这是一篇测试文章~
这是一篇测试文章~
这是一篇测试文章~
这是一篇测试文章~
这是一篇测试文章~

### 三级标题

1. a
2. b
3. c

#### 四级标题

~~~js
console.log('这是一篇测试文章~')
~~~

## 实现目录功能

> 喔！v-md-editor可太好用了！完美！

::: tip 
  居然还有tip功能！Amazing！
:::
`

const preview = ref()
const directory = ref([])

onMounted(() => {
  console.log(preview.value.$el)
  const anchors = preview.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
  const titles = Array.from(anchors).filter((title) => !!title.innerText.trim())
  if (!titles.length) {
    directory.value = []
    return
  }

  const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort()

  directory.value = titles.map((el) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName)
  }))

  console.log(directory.value)
})

const handleAnchorClick = (anchor) => {
  const { lineIndex } = anchor

  const heading = preview.value.$el.querySelector(`[data-v-md-line="${lineIndex}"]`)

  if (heading) {
    preview.value.scrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60
    })
  }
}
</script>

<style lang="scss" scoped>
.article {
  margin: 20px 0;
}
.directory {
  position: sticky;
  top: 10px;
}
</style>
