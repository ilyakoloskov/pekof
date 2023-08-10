<template>
  <div class="card">
    <app-button
      class="card__btn"
      v-if="!isFavorites"
      :typeIcon="typeIcon.add"
      @click.prevent="addToFavorites(product)"
    >
    </app-button>

    <app-button
      class="card__btn"
      v-else
      :typeIcon="typeIcon.remove"
      @click.prevent="removeFromFavorites(product)"
    >
    </app-button>

    <app-button
      :typeIcon="typeIcon.close"
      class="card__btn"
      @click.prevent="removeFromFavorites(product)"
    >
    </app-button>

    <img
      @click.prevent="$router.push({ name: 'product', params: { id: product.id } })"
      class="card__image"
      :src="product.image"
    />

    <h4 class="card__name">{{ product.title }}</h4>
    <div class="card__price">{{ product.price }} руб.</div>
  </div>
</template>

<script>
import AppButton from '../UI/AppButton.vue'

export default {
  name: 'product-item',
  components: {
    AppButton,
  },
  props: {
    product: {
      type: Object,
    },
    typeIcon: Object,
  },
  data() {
    return {
      isFavorites: false,
    }
  },
  methods: {
    addToFavorites(product) {
      this.$emit('addToFavorites', product)
      this.isFavorites = true
    },
    removeFromFavorites(product) {
      this.$emit('removeFromFavorites', product)
      this.isFavorites = false
    },
  },
  emits: ['addToFavorites', 'removeFromFavorites'],
}
</script>
