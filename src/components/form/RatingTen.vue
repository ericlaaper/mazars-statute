<template>
  <ValidationProvider :name="stat.name" :rules="rules" v-slot="{ errors }">
    <v-rating
      v-model="innerValue"
      :error-messages="errors"
      v-on="$listeners"
      length="10"
      dense
      hover
      background-color="white"
    >
      <template v-slot:item="props">
        <v-icon
          class="mt-1"
          medium
          :color="props.isFilled ? 'primary' : 'secondary'"
          v-text="`mdi-numeric-${props.index + 1}-circle`"
          @click="props.click"
        ></v-icon>
      </template>
    </v-rating>
  </ValidationProvider>
</template>

<script>
export default {
  name: "RatingTen",
  components: {},
  props: {
    rules: {
      type: [Object, String],
      default: "",
    },
    value: {
      type: [Number, String],
      default: null,
    },
    stat: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    innerValue: "",
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style scoped></style>
