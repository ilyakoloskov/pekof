<template>
  <!-- MAIN-SCREEN -->
  <section class="main-screen">
    <img class="main-screen__bg" src="../assets/images/main-screen-bg.png" alt="" />
  </section>

  <Cards :cards="cards" />
</template>

<style></style>

<script>
import Cards from '../assets/components/Cards/Cards.vue'
import data from '../cards.json'

export default {
  name: 'Home',
  data() {
    return {
      cards: data.cards,
    }
  },
  components: {
    Cards,
  },
}
</script>
