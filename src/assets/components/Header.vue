<template>
  <!-- HEADER -->
  <header class="header" @click="showState">
    <div class="container">
      {{ cards }}
      <div class="header__wrapper">
        <router-link to="/"><img src="../images/logo.svg" alt="Пекоф" /></router-link>
        <router-link to="/favorites"
          ><img src="../images/favorites.svg" alt="Избранное"
        /></router-link>
      </div>
    </div>
  </header>
</template>
<style></style>
<script>
export default {
  name: 'Header',
  data() {
    return {
      // cards: window.store.state.data,
    }
  },
  methods: {
    showState: function () {
      // console.log(window.state.favorites.cards)
    },
  },
}
</script>
