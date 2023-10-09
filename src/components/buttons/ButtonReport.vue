<template>
  <div class="text-center mt-15 elevation-0">
    <v-btn color="primary" x-large @click="$emit('onClick')">
      <slot>BEWAAR</slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonReport",
};
</script>

<style scoped></style>
