import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

import './main.sass'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Реализация state менеджера, вместо pinia/vuex, т.к в ТЗ не было указано можно ли его использовать
const state = reactive({
  favorites: {
    title: 'hello, im global state',
  },
})

window.state = state
