import { createApp } from 'vue'
import App from './App.vue'
import router from './views/router'

import './main.sass'

const app = createApp(App)
app.use(router)
app.mount('#app')
