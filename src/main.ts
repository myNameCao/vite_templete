import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'virtual:windi.css'

import App from './App.vue'
import router from './router'

import '@utils/rem.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
