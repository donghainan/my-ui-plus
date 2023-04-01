import { createApp } from 'vue'
import App from './App.vue'
import {EIcon } from '@edy-plus/components/icon'
import { EButton} from '@edy-plus/components/button'
import '@edy-plus/theme-chalk/src/index.scss'
const app = createApp(App)
app.use(EIcon)
app.use(EButton)
app.mount('#app')
