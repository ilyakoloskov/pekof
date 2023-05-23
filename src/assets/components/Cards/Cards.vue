<template>
  <!-- CARDS -->
  <section class="cards">
    <div class="container">
      <div class="cards__wrapper">
        <Card v-for="card in cards" :key="card.title" :card="card" />
      </div>
    </div>
  </section>
</template>
<style></style>
<script>
import Card from './Card.vue'
export default {
  name: 'Cards',
  props: {
    cards: {
      type: Array,
    },
  },
  components: {
    Card,
  },
  data() {
    return {}
  },
}
</script>
