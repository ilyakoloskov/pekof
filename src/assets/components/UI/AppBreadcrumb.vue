<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li class="breadcrumb__item">
        <router-link class="breadcrumb__link link" to="/">Главная</router-link>
      </li>
      <li class="breadcrumb__item">
        <router-link class="breadcrumb__link link" to="/favorites">Избранное</router-link>
      </li>
      <li class="breadcrumb__item">
        <router-link class="breadcrumb__link link" to="/product/1">Товар</router-link>
      </li>
    </ul>
  </nav>
</template>

<style></style>

<script>
export default {
  name: 'app-breadcrumbs',
}
</script>
