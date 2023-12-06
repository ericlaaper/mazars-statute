<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioRegular
      :label="statText.statement21.name"
      v-model="question_p"
      error-message="errors"
      rules="required"
      :stat="statText.statement21"
      v-if="visData.statement_21"
    />
    <AreaValidation
      v-if="question_p === 'ke4'"
      label="Anders:"
      rules="max:200"
      v-model="data_g"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <AreaValidation
      v-if="visData.statement_22"
      label="Toelichting"
      rules="max:200"
      v-model="data_h"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioJN
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="question_q"
      rules="required"
      :value="question_q"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <AreaValidation
      v-if="visData.statement_24"
      label="Toelichting"
      rules="max:200"
      v-model="data_i"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentE",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_p: {
      get() {
        return this.$store.state.moduleA.moduleData.question_p;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_p", value);
      },
    },
    question_q: {
      get() {
        return this.$store.state.moduleA.moduleData.question_q;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_q", value);
      },
    },
    data_g: {
      get() {
        return this.$store.state.moduleA.moduleData.data_g;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_g", value);
      },
    },
    data_h: {
      get() {
        return this.$store.state.moduleA.moduleData.data_h;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_h", value);
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
