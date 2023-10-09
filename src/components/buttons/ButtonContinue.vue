<template>
  <v-btn
    color="primary"
    small
    class="elevation-0 mb-5 mr-8"
    @click="$emit('onClick')"
  >
    <slot>Verder</slot>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonContinue",
};
</script>

<style scoped></style>
