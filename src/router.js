import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Favorites from './views/Favorites.vue'
import Single from './views/Single.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      alias: '/',
      props: true,
      meta: {
        breadcrumb: 'Главная',
      },
    },
    { name: 'favorites', path: '/favorites', component: Favorites, props: true },
    { name: 'product', path: '/product/:id?', component: Single, props: true },
  ],
})
