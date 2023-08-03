import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import './assets/common.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.mount('#app')
