<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <RadioJN
      v-if="visData.statement_9"
      :stat="statText.statement2"
      v-model="question_i"
      rules="required"
      :value="question_i"
    />
    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioJN
      v-if="visData.statement_10"
      :stat="statText.statement10"
      v-model="question_j"
      rules="required"
      :value="question_j"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioJN
      v-if="visData.statement_11"
      :stat="statText.statement11"
      v-model="question_k"
      rules="required"
      :value="question_k"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <RadioJN
      v-if="visData.statement_12"
      :stat="statText.statement12"
      v-model="question_l"
      rules="required"
      :value="question_l"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioJN
      v-if="visData.statement_13"
      :stat="statText.statement13"
      v-model="question_m"
      rules="required"
      :value="question_m"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioJN
      v-if="visData.statement_14"
      :stat="statText.statement14"
      v-model="question_n"
      rules="required"
      :value="question_n"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement15"
      v-if="visData.statement_15"
    />
    <RadioJN
      v-if="visData.statement_15"
      :stat="statText.statement15"
      v-model="question_o"
      rules="required"
      :value="question_o"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <RadioJN
      v-if="visData.statement_16"
      :stat="statText.statement16"
      v-model="question_p"
      rules="required"
      :value="question_p"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioJN
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="question_q"
      rules="required"
      :value="question_q"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioJN
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="question_r"
      rules="required"
      :value="question_r"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioJN
      v-if="visData.statement_19"
      :stat="statText.statement19"
      v-model="question_s"
      rules="required"
      :value="question_s"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioJN
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="question_t"
      rules="required"
      :value="question_t"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentA",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_i: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_i;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_i", value);
      },
    },
    question_j: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_j;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_j", value);
      },
    },
    question_k: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_k;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_k", value);
      },
    },
    question_l: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_l;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_l", value);
      },
    },
    question_m: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_m;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_m", value);
      },
    },
    question_n: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_n;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_n", value);
      },
    },
    question_o: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_o;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_o", value);
      },
    },
    question_p: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_p;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_p", value);
      },
    },
    question_q: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_q;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_q", value);
      },
    },
    question_r: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_r;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_r", value);
      },
    },
    question_s: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_s;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_s", value);
      },
    },
    question_t: {
      get() {
        return this.$store.state.moduleJ.moduleData.question_t;
      },
      set(value) {
        this.$store.commit("moduleJ/update_question_t", value);
      },
    },
    ...mapGetters("visJ", ["visData"]),
  },
};
</script>

<style scoped></style>
