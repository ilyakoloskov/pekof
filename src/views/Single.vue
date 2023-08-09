<template>
  ЗДЕСЬ БУДУТ ХЛЕБНЫЕ КРОШКИ
  <section class="single">
    <div class="container"><h1>Женская сумка</h1></div>
    <h3>{{ product.title }}</h3>
    <h5>{{ product.price }}</h5>
    <button @click.stop="this.$emit('addToFavorites', product)">Добавить в избранное</button>
  </section>
</template>
<style></style>

<script>
import axios from 'axios'
export default {
  name: 'Single',
  props: {
    favorites: {
      type: Array,
    },
    title: String,
  },
  data() {
    return {
      product: Object,
    }
  },
  components: {},
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${this.$route.params.id}`
        )
        this.product = response.data
        console.log(response.data)
        console.log(this.product, ' product')
      } catch (e) {
        alert(e)
      }
    },
  },
  mounted() {
    this.fetchProduct()
  },
}
</script>
