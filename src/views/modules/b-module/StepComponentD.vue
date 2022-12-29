<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioBesluit
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="question_c"
      rules="required"
      :value="question_c"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioBesluit
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="question_d"
      rules="required"
      :value="question_d"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioBesluit
      v-if="visData.statement_19"
      :stat="statText.statement19"
      v-model="question_e"
      rules="required"
      :value="question_e"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioBesluit
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="question_f"
      rules="required"
      :value="question_f"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioBesluit
      v-if="visData.statement_21"
      :stat="statText.statement21"
      v-model="question_g"
      rules="required"
      :value="question_g"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <RadioBesluit
      v-if="visData.statement_22"
      :stat="statText.statement22"
      v-model="question_h"
      rules="required"
      :value="question_h"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioBesluit
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="question_i"
      rules="required"
      :value="question_i"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioBesluit
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="question_j"
      rules="required"
      :value="question_j"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioBesluit
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="question_k"
      rules="required"
      :value="question_k"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <AreaValidation
      v-if="visData.statement_26"
      label="Andere onderwerpen"
      rules="max:150"
      v-model="data_e"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RadioBesluit from "@/components/form/RadioBesluit.vue";
export default {
  name: "StepComponentD",
  props: ["statText"],
  components: { RadioBesluit },
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_c: {
      get() {
        return this.$store.state.moduleB.moduleData.question_c;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.moduleB.moduleData.question_d;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_d", value);
      },
    },
    question_e: {
      get() {
        return this.$store.state.moduleB.moduleData.question_e;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_e", value);
      },
    },
    question_f: {
      get() {
        return this.$store.state.moduleB.moduleData.question_f;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_f", value);
      },
    },
    question_g: {
      get() {
        return this.$store.state.moduleB.moduleData.question_g;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_g", value);
      },
    },
    question_h: {
      get() {
        return this.$store.state.moduleB.moduleData.question_h;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_h", value);
      },
    },
    question_i: {
      get() {
        return this.$store.state.moduleB.moduleData.question_i;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_i", value);
      },
    },
    question_j: {
      get() {
        return this.$store.state.moduleB.moduleData.question_j;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_j", value);
      },
    },
    question_k: {
      get() {
        return this.$store.state.moduleB.moduleData.question_k;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_k", value);
      },
    },
    data_e: {
      get() {
        return this.$store.state.moduleB.moduleData.data_e;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_e", value);
      },
    },
    ...mapGetters("visB", ["visData"]),
  },
};
</script>

<style scoped></style>
