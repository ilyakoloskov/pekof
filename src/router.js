import { createRouter, createWebHashHistory } from "vue-router";
import Catalog from "./views/Catalog.vue"
import Favorites from "./views/Favorites.vue"
import Single from "./views/Single.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Catalog, alias: '/' },
        { path: '/favorites', component: Favorites },
        { path: '/single', component: Single },
    ]
})