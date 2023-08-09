<template>
  ЗДЕСЬ БУДУТ ХЛЕБНЫЕ КРОШКИ
  <h1>Избранное</h1>

  <ProductsList :products="favorites" />
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
  components: {
    ProductsList,
  },
}
</script>
