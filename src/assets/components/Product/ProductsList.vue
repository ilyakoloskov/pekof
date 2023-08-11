<template>
  <!-- CARDS -->
  <section class="cards">
    <div  class="container">
      <div class="cards__wrapper">
        <product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
          :typeIcon="typeIcon"
          @addToFavorites="addToFavorites(product)"
          @removeFromFavorites="removeFromFavorites(product)"
        >
        </product-item>
      </div>
    </div>
  </section>
</template>
<style></style>

<script>
import ProductItem from './ProductItem.vue'

export default {
  name: 'products-list',
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
    ProductItem
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
