<template>
  <!-- MAIN-SCREEN -->
  <section class="main-screen">
    <img class="main-screen__bg" src="../assets/images/main-screen-bg.png" alt="" />
  </section>
  <products-list
    :products="products"
    :typeIcon="typeIcon"
    @addToFavorites="addToFavorites"
    @removeFromFavorites="removeFromFavorites"
  />
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
  data() {
    return {
      typeIcon: {
        add: 'add',
        remove: 'remove',
      },
    }
  },
  methods: {
    addToFavorites(product) {
      this.$emit('addToFavorites', product)
    },
    removeFromFavorites(product) {
      this.$emit('removeFromFavorites', product)
    },
    emits: ['addToFavorites', 'removeFromFavorites'],
  },
}
</script>
