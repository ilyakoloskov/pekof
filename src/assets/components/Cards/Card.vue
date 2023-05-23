<template>
  <article class="card">
    <h4 class="card__name">{{ card.title }}</h4>
    <div class="card__price">{{ card.price }} руб.</div>
    <button>Добавить в избранное</button>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
    },
  },
  data() {
    return {}
  },
}
</script>
