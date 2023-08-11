<template>
  <Header :favorites="favorites" />
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
  <Footer />
</template>

<script>
import Header from './assets/components/Header.vue'
import Footer from './assets/components/Footer.vue'
import axios from 'axios'
export default {
  components: {
    Header,
    Footer,
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
      console.log(product)
      if (this.favorites.length) {
        let isFavorites = this.favorites.includes(product)
        if (!isFavorites) {
          this.favorites.push(product)
        } else {
          this.removeFromFavorites(product)
        }
      } else {
        this.favorites.push(product)
      }
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
