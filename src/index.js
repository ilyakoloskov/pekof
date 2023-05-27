import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store/store'

import './main.sass'

const app = createApp(App)
app.use(router)
app.mount('#app')

window.store = store
