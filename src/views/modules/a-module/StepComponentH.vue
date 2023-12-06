<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <RadioRegular
      :label="statText.statement29.name"
      v-model="question_u"
      error-message="errors"
      rules="required"
      :stat="statText.statement29"
      v-if="visData.statement_29"
    />
    <AreaValidation
      v-if="question_u === 'ke5'"
      label="Anders:"
      rules="max:200"
      v-model="data_m"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement30"
      v-if="visData.statement_30"
    />
    <RadioRegular
      :label="statText.statement30.name"
      v-model="question_v"
      error-message="errors"
      rules="required"
      :stat="statText.statement30"
      v-if="visData.statement_30"
    />
    <AreaValidation
      v-if="question_v === 'ke5'"
      label="Anders:"
      rules="max:200"
      v-model="data_n"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement31"
      v-if="visData.statement_31"
    />
    <RadioRegular
      :label="statText.statement31.name"
      v-model="question_w"
      error-message="errors"
      rules="required"
      :stat="statText.statement31"
      v-if="visData.statement_31"
    />
    <AreaValidation
      v-if="question_w === 'ke5'"
      label="Anders:"
      rules="max:200"
      v-model="data_o"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentH",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_u: {
      get() {
        return this.$store.state.moduleA.moduleData.question_u;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_u", value);
      },
    },
    question_v: {
      get() {
        return this.$store.state.moduleA.moduleData.question_v;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_v", value);
      },
    },
    question_w: {
      get() {
        return this.$store.state.moduleA.moduleData.question_w;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_w", value);
      },
    },
    data_m: {
      get() {
        return this.$store.state.moduleA.moduleData.data_m;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_m", value);
      },
    },
    data_n: {
      get() {
        return this.$store.state.moduleA.moduleData.data_n;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_n", value);
      },
    },
    data_o: {
      get() {
        return this.$store.state.moduleA.moduleData.data_o;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_o", value);
      },
    },

    ...mapGetters("visA", ["visData"]),
  },
};
</script>

<style scoped></style>
