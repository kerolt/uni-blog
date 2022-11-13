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
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'animate.css'

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
