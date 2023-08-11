<template>
  <div class="page-info">
    <div class="container">
      <nav class="breadcrumb">
        <ul class="breadcrumb__list">
          <li class="breadcrumb__item">
            <router-link class="breadcrumb__link link" to="/Home">Главная</router-link>
          </li>
          <li class="breadcrumb__item">
            <router-link class="breadcrumb__link link" to="/Home">Главная</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <section class="single">
    <div class="container">
      <div v-if="isFetching" class="single__wrapper">
        <img class="single__image" :src="product.image" />
        <div class="single__inner">
          <h1 class="single__title title">{{ product.title }}</h1>
          <p class="single__description">{{ product.description }}</p>
          <div class="single__price">{{ product.price }}</div>
          <button
            class="single__btn"
            :class="{ single__btn_active: btnIsActive, single__btn_disabled: !btnIsActive }"
            @click.stop="addToFavorites"
          >
            <img class="single__btn-icon" src="../assets/images/favorites_disabled.svg" />
            <img
              class="single__btn-icon single__btn-icon_hover"
              src="../assets/images/favorites.svg"
            />
            <span class="single__btn-text">избранное</span>
          </button>
        </div>
      </div>
      <app-preloader v-else></app-preloader>
    </div>
  </section>
</template>
<style></style>

<script>
import axios from 'axios'
import AppButton from '../assets/components/UI/AppButton.vue'
import AppPreloader from '../assets/components/UI/AppPreloader.vue'

export default {
  name: 'Single',
  components: {
    AppButton,
    AppPreloader
  },
  props: {
    favorites: {
      type: Array,
    },
    title: String,
  },
  data() {
    return {
      product: Object,
      btnIsActive: true,
      isFetching: false
    }
  },
  methods: {
    async fetchProduct() {
      if(!this.isFetching){
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${this.$route.params.id}`
          )
          this.product = response.data
          console.log(response.data)
          console.log(this.product, ' product')
          this.isFetching = true
        } catch (e) {
          alert(e)
        }
      }
    },
    addToFavorites(product) {
      this.btnIsActive = !this.btnIsActive
      this.$emit('addToFavorites', this.product)
      console.log(product)
    },
  },
  mounted() {
    this.fetchProduct()
  },
  emits: ['addToFavorites'],
}
</script>
