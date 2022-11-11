import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/scss/index.scss'
import 'virtual:svg-icons-register'
import SvgIcon from './assets/svg/SvgIcon.vue'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// Prism
import Prism from 'prismjs'
// 代码高亮
import 'prismjs/components/prism-json'

// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism
})

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.use(VMdPreview)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
