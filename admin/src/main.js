import { createApp, h } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'
import router from './router'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPersist from 'pinia-plugin-persist'

// 引入md编辑器
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'

const app = createApp({
  render: () => h(App)
})

const pinia = createPinia()
pinia.use(piniaPersist)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

VueMarkdownEditor.use(vuepressTheme, {
  Prism
})

app.use(pinia).use(router).use(ElementPlus).use(VueMarkdownEditor).mount('#app')
