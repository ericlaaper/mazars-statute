<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <RadioRegular
      :label="statText.statement9.name"
      v-model="question_a"
      error-message="errors"
      rules="required"
      :stat="statText.statement9"
    />
    <AreaValidation
      v-if="question_a === 'ke2'"
      label="Anders"
      rules="max:200"
      v-model="data_b"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioRegular
      :label="statText.statement10.name"
      v-model="question_b"
      error-message="errors"
      rules="required"
      :stat="statText.statement10"
    />
    <AreaValidation
      v-if="question_b === 'ke4'"
      label="Anders"
      rules="max:200"
      v-model="data_c"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentB",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_a: {
      get() {
        return this.$store.state.moduleB.moduleData.question_a;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_a", value);
      },
    },
    question_b: {
      get() {
        return this.$store.state.moduleB.moduleData.question_b;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_b", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleB.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_b", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleB.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_c", value);
      },
    },
    ...mapGetters("visB", ["visData"]),
  },
};
</script>

<style scoped></style>
