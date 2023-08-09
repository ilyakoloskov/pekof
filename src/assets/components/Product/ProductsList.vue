<template>
  <!-- CARDS -->
  <section class="cards">
    <div class="container">
      <div class="cards__wrapper">
        <product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
          @addToFavorites="this.$emit('addToFavorites', product)"
        />
      </div>
    </div>
  </section>
</template>
<style></style>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: 'product-list',
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    ProductItem,
  },
  data() {
    // console.log(addToFavorites)
    return {
      // cards: store.state.data.cards
    }
  },
  methods: {},
}
</script>
