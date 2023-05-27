<template>
  <!-- CARDS -->
  <section class="cards">
    <div class="container">
      <div class="cards__wrapper">
        <Card v-for="(card, index) in cards" :key="index" :card="card" />
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
      type: Object,
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
