<template>
  <v-btn color="error" small outlined class="ml-5" @click="onClick">
    <slot>STOP</slot>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonStop",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
