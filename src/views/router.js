import { createRouter, createWebHashHistory } from "vue-router";
import Catalog from "./Catalog.vue"
import Favorites from "./Favorites.vue"
import Single from "./Single.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Catalog, alias: '/' },
        { path: '/favorites', component: Favorites },
        { path: '/single', component: Single },
    ]
})