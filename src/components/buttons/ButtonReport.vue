<template>
  <div class="text-center mt-15">
    <v-btn color="primary" x-large @click="$emit('onClick')">
      <slot>Rapportage</slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonReport",
};
</script>

<style scoped></style>
