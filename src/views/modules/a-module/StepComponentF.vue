<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioRegular
      :label="statText.statement25.name"
      v-model="question_r"
      error-message="errors"
      rules="required"
      :stat="statText.statement25"
    />
    <AreaValidation
      v-if="question_r === 'ke3'"
      label="Anders:"
      rules="max:200"
      v-model="data_j"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioRegular
      :label="statText.statement26.name"
      v-model="question_s"
      error-message="errors"
      rules="required"
      :stat="statText.statement26"
    />
    <AreaValidation
      v-if="question_s === 'ke4'"
      label="Anders"
      rules="max:200"
      v-model="data_k"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentF",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_r: {
      get() {
        return this.$store.state.moduleA.moduleData.question_r;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_r", value);
      },
    },
    question_s: {
      get() {
        return this.$store.state.moduleA.moduleData.question_s;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_s", value);
      },
    },
    data_j: {
      get() {
        return this.$store.state.moduleA.moduleData.data_j;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_j", value);
      },
    },
    data_k: {
      get() {
        return this.$store.state.moduleA.moduleData.data_k;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_k", value);
      },
    },
    data_i: {
      get() {
        return this.$store.state.moduleA.moduleData.data_i;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_i", value);
      },
    },

    ...mapGetters("visA", ["visData"]),
  },
};
</script>

<style scoped></style>
