<template>
  <div>{{ recommends }}</div>
</template>

<script>
export default {
  name: 'DetailRecommends',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
</style>
