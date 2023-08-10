<template>
  <Header :favorites="favorites" />
  <!-- MAIN -->
  <main class="main">
    <keep-alive>
      <router-view
        v-bind="routeParams"
        :products="products"
        :favorites="favorites"
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
      isProductsLoad: false,
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        this.products = response.data
        console.log('Получаем список товаров с сервера')
        console.table(response.data)
      } catch (e) {
        alert(e)
      }
    },
    addToFavorites(product) {
      if (this.favorites.length) {
        this.favorites.map((item) => {
          if (item.id === product.id) {
            alert('Товар уже добавлен')
          }
        })
      } else {
        this.favorites.push(product)
        console.log(`Товар ${product.id} добавлен в корзину`)
        console.table(product)
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
