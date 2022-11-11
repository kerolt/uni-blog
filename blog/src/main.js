import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/scss/index.scss'
import 'virtual:svg-icons-register'
import SvgIcon from './assets/svg/SvgIcon.vue'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.use(router).use(ElementPlus).mount('#app')
