<template>
  <!-- MAIN-SCREEN -->
  <section class="main-screen">
    <img class="main-screen__bg" src="../assets/images/main-screen-bg.png" alt="" />
  </section>
  <products-list :products="products" @addToFavorites="addToFavorites" />
</template>

<style></style>

<script>
import ProductsList from '../assets/components/Product/ProductsList.vue'
export default {
  name: 'Home',
  components: {
    ProductsList,
  },
  props: {
    products: {
      type: Array,
    },
  },
  methods: {
    addToFavorites(product) {
      this.$emit('addToFavorites', product)
    },
  },
}
</script>
