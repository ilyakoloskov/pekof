<template>
  <!-- MAIN-SCREEN -->
  <section class="main-screen">
    {{ count }}
    <button @click="counter">CLICK</button>
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
      title: window.state.favorites.title,
      count: window.state.favorites.count,
    }
  },
  methods: {
    counter() {
      window.state.favorites.addCount()
      console.log('count:', window.state.favorites.count)
    },
  },
  components: {
    Cards,
  },
}
</script>
