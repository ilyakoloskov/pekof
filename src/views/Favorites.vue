<template>
  <div class="page-info">
    <div class="container">
      <app-breadcrumb></app-breadcrumb>
      <h1 class="title">Избранное</h1>
    </div>
  </div>
  <section class="empty" v-if="favorites.length === 0">
    <div class="container">
      <div class="empty__title">список избранного пуст</div>
    </div>
  </section>
  <app-products-list
    v-else
    :products="favorites"
    :typeIcon="typeIcon"
    @removeFromFavorites="removeFromFavorites"
  >
  </app-products-list>
</template>

<style></style>

<script>
import AppProductsList from '../assets/components/Product/AppProductsList.vue'
import AppBreadcrumb from '../assets/components/UI/AppBreadcrumb.vue'

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
    AppProductsList,
    AppBreadcrumb
  },
  methods: {
    removeFromFavorites(product) {
      this.$emit('removeFromFavorites', product)
    },
  },
  emits: ['removeFromFavorites'],
}
</script>
