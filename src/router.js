import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Favorites from './views/Favorites.vue'
import Single from './views/Single.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, alias: '/' },
    { path: '/favorites', component: Favorites },
    { path: '/single', component: Single },
  ],
})
