<template>
  <h1 class="red">{{ message }}</h1>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello Vue',
    }
  },
}
</script>

<style lang="sass">
h1
  background-color: red
</style>
