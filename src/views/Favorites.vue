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
      <h1 class="title">Избранное</h1>
    </div>
  </div>
  <section class="empty" v-if="favorites.length === 0">
    <div class="container">
      <div class="empty__title">список избранного пуст</div>
    </div>
  </section>
  <ProductsList
    :products="favorites"
    :typeIcon="typeIcon"
    @removeFromFavorites="removeFromFavorites"
    v-else
  />
</template>

<style></style>

<script>
import ProductsList from '../assets/components/Product/ProductsList.vue'

export default {
  name: 'Favorites',
  props: {
    favorites: {
      type: Array,
    },
  },
  data() {
    return {
      typeIcon: {
        close: 'close',
      },
    }
  },
  components: {
    ProductsList,
  },
  methods: {
    removeFromFavorites(product) {
      this.$emit('removeFromFavorites', product)
    },
  },
}
</script>
