<template>
  <!-- MAIN-SCREEN -->
  <section class="main-screen">
    <img class="main-screen__bg" src="../assets/images/main-screen-bg.png" alt="" />
  </section>
  {{ cards }}
  <!-- <Cards :cards="cards" /> -->
  <Cards />
</template>

<style></style>

<script>
import Cards from '../assets/components/Cards/Cards.vue'

export default {
  name: 'Home',
  data() {
    return {
      cards: window.store.state.data,
    }
  },
  methods: {
    addFavorites() {},
  },
  computed: {},
  components: {
    Cards,
  },
}
</script>
