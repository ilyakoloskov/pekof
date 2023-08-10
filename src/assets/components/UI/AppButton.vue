<template>
  <button type="button" class="btn">
    <img
      class="btn__icon"
      v-if="typeIcon == 'add'"
      src="../../images/favorites_disabled.svg"
      alt=""
    />

    <img class="btn__icon" v-if="typeIcon == 'remove'" src="../../images/favorites.svg" alt="" />

    <img class="btn__icon" v-if="typeIcon == 'close'" src="../../images/remove.svg" alt="" />
  </button>
</template>

<style></style>

<script>
export default {
  name: 'app-button',
  props: {
    type: {
      required: true,
    },
    typeIcon: String,
  },
}
</script>
