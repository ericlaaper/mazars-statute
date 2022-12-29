<template>
  <v-btn color="primary" small outlined class="mb-5 mr-8" @click="onClick">
    <slot>Terug</slot>
  </v-btn>
</template>

<script>
export default {
  name: "taBtnBack",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
