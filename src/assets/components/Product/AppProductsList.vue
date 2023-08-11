<template>
  <!-- CARDS -->
  <section class="cards">
    <div  class="container">
      <div class="cards__wrapper">
        <app-product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
          :typeIcon="typeIcon"
          @addToFavorites="addToFavorites(product)"
          @removeFromFavorites="removeFromFavorites(product)"
        >
        </app-product-item>
      </div>
    </div>
  </section>
</template>
<style></style>

<script>
import AppProductItem from './AppProductItem.vue'

export default {
  name: 'app-products-list',
  props: {
    products: {
      type: Array,
    },
    typeIcon: Object,
  },
  data() {
    return {}
  },
  components: {
    AppProductItem
  },
  methods: {
    addToFavorites(product) {
      this.$emit('addToFavorites', product)
    },
    removeFromFavorites(product) {
      this.$emit('removeFromFavorites', product)
    },
  },
  emits: ['addToFavorites', 'removeFromFavorites'],
}
</script>
