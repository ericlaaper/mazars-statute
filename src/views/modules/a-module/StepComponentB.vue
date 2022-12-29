<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioRegular
      :label="statText.statement11.name"
      v-model="question_i"
      error-message="errors"
      rules="required"
      :stat="statText.statement11"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <RadioRegular
      :label="statText.statement12.name"
      v-model="question_j"
      error-message="errors"
      rules="required"
      :stat="statText.statement12"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioRegular
      :label="statText.statement13.name"
      v-model="question_k"
      error-message="errors"
      rules="required"
      :stat="statText.statement13"
    />
    <v-divider></v-divider>
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
    question_i: {
      get() {
        return this.$store.state.moduleA.moduleData.question_i;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_i", value);
      },
    },
    question_j: {
      get() {
        return this.$store.state.moduleA.moduleData.question_j;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_j", value);
      },
    },
    question_k: {
      get() {
        return this.$store.state.moduleA.moduleData.question_k;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_k", value);
      },
    },

    ...mapGetters("visA", ["visData"]),
  },
};
</script>

<style scoped></style>
