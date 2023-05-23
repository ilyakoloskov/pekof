<template>
  <!-- HEADER -->
  <header class="header">
    <div class="container">
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
    return {}
  },
}
</script>
