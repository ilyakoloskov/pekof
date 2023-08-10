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
      <div class="single__wrapper">
        <img class="single__image" :src="product.image" />
        <div class="single__inner">
          <h1 class="single__title title">Женская сумка</h1>
          <p class="single__description">{{ product.description }}</p>
          <div class="single__price">{{ product.price }}</div>
          <app-button type="add">Добавить в избранное</app-button>
          <button @click.stop="this.$emit('addToFavorites', product)">Добавить в избранное</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style></style>

<script>
import axios from 'axios'
import AppButton from '../assets/components/UI/AppButton.vue'

export default {
  name: 'Single',
  components: {
    AppButton,
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
      typeIcon: {
        add: 'add',
        remove: 'remove',
      },
    }
  },
  components: {},
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${this.$route.params.id}`
        )
        this.product = response.data
        console.log(response.data)
        console.log(this.product, ' product')
      } catch (e) {
        alert(e)
      }
    },
  },
  mounted() {
    this.fetchProduct()
  },
}
</script>
