<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioJN
      v-if="visData.statement_11"
      :stat="statText.statement11"
      v-model="question_a"
      rules="required"
      :value="question_a"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <RadioJN
      v-if="visData.statement_12"
      :stat="statText.statement12"
      v-model="question_b"
      rules="required"
      :value="question_b"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioJN
      v-if="visData.statement_13"
      :stat="statText.statement13"
      v-model="question_c"
      rules="required"
      :value="question_c"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioJN
      v-if="visData.statement_14"
      :stat="statText.statement14"
      v-model="question_d"
      rules="required"
      :value="question_d"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement15"
      v-if="visData.statement_15"
    />
    <RadioJN
      v-if="visData.statement_15"
      :stat="statText.statement15"
      v-model="question_e"
      rules="required"
      :value="question_e"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <RadioJN
      v-if="visData.statement_16"
      :stat="statText.statement16"
      v-model="question_f"
      rules="required"
      :value="question_f"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioJN
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="question_g"
      rules="required"
      :value="question_g"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioJN
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="question_h"
      rules="required"
      :value="question_h"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioJN
      v-if="visData.statement_19"
      :stat="statText.statement19"
      v-model="question_i"
      rules="required"
      :value="question_i"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioJN
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="question_j"
      rules="required"
      :value="question_j"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioJN
      v-if="visData.statement_21"
      :stat="statText.statement21"
      v-model="question_k"
      rules="required"
      :value="question_k"
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
    question_a: {
      get() {
        return this.$store.state.moduleC.moduleData.question_a;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_a", value);
      },
    },
    question_b: {
      get() {
        return this.$store.state.moduleC.moduleData.question_b;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_b", value);
      },
    },
    question_c: {
      get() {
        return this.$store.state.moduleC.moduleData.question_c;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.moduleC.moduleData.question_d;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_d", value);
      },
    },
    question_e: {
      get() {
        return this.$store.state.moduleC.moduleData.question_e;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_e", value);
      },
    },
    question_f: {
      get() {
        return this.$store.state.moduleC.moduleData.question_f;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_f", value);
      },
    },
    question_g: {
      get() {
        return this.$store.state.moduleC.moduleData.question_g;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_g", value);
      },
    },
    question_h: {
      get() {
        return this.$store.state.moduleC.moduleData.question_h;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_h", value);
      },
    },
    question_i: {
      get() {
        return this.$store.state.moduleC.moduleData.question_i;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_i", value);
      },
    },
    question_j: {
      get() {
        return this.$store.state.moduleC.moduleData.question_j;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_j", value);
      },
    },
    question_k: {
      get() {
        return this.$store.state.moduleC.moduleData.question_k;
      },
      set(value) {
        this.$store.commit("moduleC/update_question_k", value);
      },
    },
    ...mapGetters("visC", ["visData"]),
  },
};
</script>

<style scoped></style>
