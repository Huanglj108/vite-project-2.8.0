import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import Antd from 'ant-design-vue'
import * as Icons from '@ant-design/icons-vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(router).use(Antd).use(pinia)
app.mount('#app')

// 全局使用图标，遍历yinru
const icons: any = Icons
for(const i in icons) {
  app.component(i,icons[i]);
}