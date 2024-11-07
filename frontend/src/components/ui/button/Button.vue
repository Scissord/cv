<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    }
  },
};
</script>

<template>
  <button
    class="btn btn-primary text-white">
    {{ text }}
  </button>
</template>

<style scoped>
</style>
