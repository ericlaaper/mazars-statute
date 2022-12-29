<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioJN
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="l"
      rules="required"
      :value="question_l"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioJN
      v-if="visData.statement_21"
      :stat="statText.statement21"
      v-model="question_m"
      rules="required"
      :value="question_m"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <RadioJN
      v-if="visData.statement_22"
      :stat="statText.statement22"
      v-model="question_n"
      rules="required"
      :value="question_n"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioJN
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="question_o"
      rules="required"
      :value="question_o"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioJN
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="question_p"
      rules="required"
      :value="question_p"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioJN
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="question_q"
      rules="required"
      :value="question_q"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <AreaValidation
      v-if="visData.statement_26"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_d"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StepComponentD",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_l: {
      get() {
        return this.$store.state.moduleN.moduleData.question_l;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_l", value);
      },
    },
    question_m: {
      get() {
        return this.$store.state.moduleN.moduleData.question_m;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_m", value);
      },
    },
    question_n: {
      get() {
        return this.$store.state.moduleN.moduleData.question_n;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_n", value);
      },
    },
    question_o: {
      get() {
        return this.$store.state.moduleN.moduleData.question_o;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_o", value);
      },
    },
    question_p: {
      get() {
        return this.$store.state.moduleN.moduleData.question_p;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_p", value);
      },
    },
    question_q: {
      get() {
        return this.$store.state.moduleN.moduleData.question_q;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_q", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleN.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleN/update_data_d", value);
      },
    },
    ...mapGetters("visN", ["visData"]),
  },
};
</script>

<style scoped></style>
