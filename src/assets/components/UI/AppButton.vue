<template>
  <button type="button" class="btn">
    <img class="btn__icon" v-if="type == 'add'" src="../../images/favorites_disabled.svg" alt="" />

    <img class="btn__icon" v-if="type == 'remove'" src="../../images/favorites.svg" alt="" />

    <img class="btn__icon" v-if="type == 'close'" src="../../images/remove.svg" alt="" />

    <div class="btn__favoriter" v-if="type == 'addasd'">
      <img class="btn__icon" src="../../images/favorites_disabled.svg" alt="" />
      <slot name="qwqd"> </slot>
    </div>
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
