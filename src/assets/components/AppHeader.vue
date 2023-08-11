<template>
  <!-- HEADER -->
  <header class="header" @click="showState">
    <div class="container">
      <div class="header__wrapper">
        <router-link class="header__logo logo" to="/"><img class="logo__img" src="../images/logo.svg" alt="Пекоф" /></router-link>
        <router-link to="/favorites">
          <div class="favorites-link">
            <img src="../images/favorites.svg" alt="Избранное" />
            <div v-if="favorites.length !== 0" class="favorites-link__count">
              {{ favorites.length }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style></style>

<script>
export default {
  name: 'Header',
  props: {
    favorites: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
