<template>
  <!-- MAIN-SCREEN -->
  <section class="main-screen">
    <img class="main-screen__bg" src="../assets/images/main-screen-bg.png" alt="" />
  </section>
  <products-list
    v-if="isFetching"
    :products="products"
    :typeIcon="typeIcon"
    @addToFavorites="addToFavorites"
    @removeFromFavorites="removeFromFavorites"
  />
  <app-preloader v-else>
    
  </app-preloader >
</template>

<style></style>

<script>
import ProductsList from '../assets/components/Product/ProductsList.vue'
import AppPreloader from '../assets/components/UI/AppPreloader.vue'

export default {
  name: 'Home',
  components: {
    ProductsList,
    AppPreloader
  },
  props: {
    products: {
      type: Array,
    },
    isFetching: Boolean
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
