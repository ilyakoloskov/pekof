<template>
  <button type="button" class="btn">
    <img class="btn__icon" v-if="type == 'add'" src="../../images/favorites_disabled.svg" alt="" />

    <img class="btn__icon" v-if="type == 'remove'" src="../../images/favorites.svg" alt="" />

    <img class="btn__icon" v-if="type == 'close'" src="../../images/remove.svg" alt="" />
  </button>
</template>

<style></style>

<script>
export default {
  name: 'app-button',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  components: {},
}
</script>
