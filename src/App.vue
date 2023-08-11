<template>
  <app-header :favorites="favorites" />
  <!-- MAIN -->
  <main class="main">
    <keep-alive>
      <router-view
        v-bind="routeParams"
        :products="products"
        :favorites="favorites"
        :isFetching="isFetching"
        @addToFavorites="addToFavorites"
        @removeFromFavorites="removeFromFavorites"
      ></router-view>
    </keep-alive>
  </main>
  <app-footer />
</template>

<script>
import AppHeader from './assets/components/AppHeader.vue'
import AppFooter from './assets/components/AppFooter.vue'
import axios from 'axios'
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      products: [],
      favorites: [],
      isFetching: false,
    }
  },
  methods: {
    async fetchProducts() {
      if(!this.isFetching){
        try {
          const response = await axios.get('https://fakestoreapi.com/products')
          this.products = response.data
          console.log('Получаем список товаров с сервера')
          console.table(response.data)
          this.isFetching = true
        } catch (e) {
          alert(e)
        }
      }else{
        this.isFetching = false
      }
    },
    addToFavorites(product) {
      this.favorites.push(product)
    },
    removeFromFavorites(product) {
      this.favorites = this.favorites.filter((item) => item.id !== product.id)
    },
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    routeParams() {
      return this.$route.params
    },
  },
}
</script>

<style></style>
