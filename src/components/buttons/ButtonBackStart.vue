<template>
  <v-btn
    color="primary"
    small
    outlined
    class="mb-5 mr-8 elevation-0"
    @click="onClick"
  >
    <slot>Terug naar begin</slot>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonBackStart",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
