<template>
  <Header />
  <!-- MAIN -->
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Header from './assets/components/Header.vue'
import Footer from './assets/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
