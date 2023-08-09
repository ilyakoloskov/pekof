<template>
  <article class="card" @click.stop="addToFavorites">
    <img v-if="isFavorites" src="../../images/favorites_disabled.svg" alt="" />
    <img v-else src="../../images/favorites.svg" alt="" />

    <img class="card__image" :src="product.image" alt="" />
    <h4 class="card__name">{{ product.title }}</h4>
    <div class="card__price">{{ product.price }} руб.</div>
  </article>
</template>

<script>
export default {
  name: 'product-item',
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      isFavorites: false,
    }
  },
  methods: {
    addToFavorites(product) {
      this.$emit('addToFavorites', product)
      this.isFavorites = true
    },
  },
  computed: {},
}
</script>
