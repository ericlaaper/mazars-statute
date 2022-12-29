<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioDelen
      v-if="visData.statement_13"
      :stat="statText.statement13"
      v-model="question_f"
      rules="required"
      :value="question_f"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioDelen
      v-if="visData.statement_14"
      :stat="statText.statement14"
      v-model="question_g"
      rules="required"
      :value="question_g"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement15"
      v-if="visData.statement_15"
    />
    <RadioDelen
      v-if="visData.statement_15"
      :stat="statText.statement15"
      v-model="question_h"
      rules="required"
      :value="question_h"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <RadioDelen
      v-if="visData.statement_16"
      :stat="statText.statement16"
      v-model="question_i"
      rules="required"
      :value="question_i"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioDelen
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="question_j"
      rules="required"
      :value="question_j"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioDelen
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="question_k"
      rules="required"
      :value="question_k"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <AreaValidation
      v-if="visData.statement_19"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_c"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RadioDelen from "@/components/form/RadioDelen.vue";
export default {
  name: "StepComponentC",
  props: ["statText"],
  components: { RadioDelen },
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_f: {
      get() {
        return this.$store.state.moduleN.moduleData.question_f;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_f", value);
      },
    },
    question_g: {
      get() {
        return this.$store.state.moduleN.moduleData.question_g;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_g", value);
      },
    },
    question_h: {
      get() {
        return this.$store.state.moduleN.moduleData.question_h;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_h", value);
      },
    },
    question_i: {
      get() {
        return this.$store.state.moduleN.moduleData.question_i;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_i", value);
      },
    },
    question_j: {
      get() {
        return this.$store.state.moduleN.moduleData.question_j;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_j", value);
      },
    },
    question_k: {
      get() {
        return this.$store.state.moduleN.moduleData.question_k;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_k", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleN.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleN/update_data_c", value);
      },
    },
    ...mapGetters("visN", ["visData"]),
  },
};
</script>

<style scoped></style>
