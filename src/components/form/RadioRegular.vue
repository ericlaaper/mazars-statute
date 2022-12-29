<template>
  <ValidationProvider :name="stat.name" :rules="rules" v-slot="{ errors }">
    <v-radio-group
      v-model="innerValue"
      :error-messages="errors"
      v-on="$listeners"
    >
      <div>
        <v-radio value="ke1" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_a }}</div></template
          >
        </v-radio>
      </div>
      <div class="mt-3" v-if="stat.nrOptions > 1">
        <v-radio value="ke2" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_b }}</div></template
          >
        </v-radio>
      </div>
      <div class="mt-3" v-if="stat.nrOptions > 2">
        <v-radio value="ke3" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_c }}</div></template
          >
        </v-radio>
      </div>
      <div class="mt-3" v-if="stat.nrOptions > 3">
        <v-radio value="ke4" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_d }}</div></template
          >
        </v-radio>
      </div>
      <div class="mt-3" v-if="stat.nrOptions > 4">
        <v-radio value="ke5" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_e }}</div></template
          >
        </v-radio>
      </div>
      <div class="mt-3" v-if="stat.nrOptions > 5">
        <v-radio value="ke6" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_f }}</div></template
          >
        </v-radio>
      </div>
      <div class="mt-3" v-if="stat.nrOptions > 6">
        <v-radio value="ke7" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_g }}</div></template
          >
        </v-radio>
      </div>
      <div class="mt-3" v-if="stat.nrOptions > 7">
        <v-radio value="ke8" color="primary">
          <template v-slot:label>
            <div class="stone_1--text">{{ stat.answer_h }}</div></template
          >
        </v-radio>
      </div>
    </v-radio-group>
  </ValidationProvider>
</template>

<script>
export default {
  name: "RadioRegular",
  components: {},
  props: {
    rules: {
      type: [Object, String],
      default: "",
    },
    value: {
      type: String,
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
