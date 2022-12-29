<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement1" v-if="visData.statement_1" />
    <RadioJN
      v-if="visData.statement_1"
      :stat="statText.statement1"
      v-model="question_a"
      rules="required"
      :value="question_a"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement2" v-if="visData.statement_2" />
    <RadioJN
      v-if="visData.statement_2"
      :stat="statText.statement2"
      v-model="question_b"
      rules="required"
      :value="question_b"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement3" v-if="visData.statement_3" />
    <RadioJN
      v-if="visData.statement_3"
      :stat="statText.statement3"
      v-model="question_c"
      rules="required"
      :value="question_c"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement4" v-if="visData.statement_4" />
    <RadioJN
      v-if="visData.statement_4"
      :stat="statText.statement4"
      v-model="question_d"
      rules="required"
      :value="question_d"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement5" v-if="visData.statement_5" />
    <RadioJN
      v-if="visData.statement_5"
      :stat="statText.statement5"
      v-model="question_e"
      rules="required"
      :value="question_e"
    />
    <v-divider></v-divider>

    <StatementText :statText="statText.statement6" v-if="visData.statement_6" />
    <AreaValidation
      v-if="visData.statement_6"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_a"
    />
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
    question_a: {
      get() {
        return this.$store.state.moduleN.moduleData.question_a;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_a", value);
      },
    },
    question_b: {
      get() {
        return this.$store.state.moduleN.moduleData.question_b;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_b", value);
      },
    },
    question_c: {
      get() {
        return this.$store.state.moduleN.moduleData.question_c;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.moduleN.moduleData.question_d;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_d", value);
      },
    },
    question_e: {
      get() {
        return this.$store.state.moduleN.moduleData.question_e;
      },
      set(value) {
        this.$store.commit("moduleN/update_question_e", value);
      },
    },
    data_a: {
      get() {
        return this.$store.state.moduleN.moduleData.data_a;
      },
      set(value) {
        this.$store.commit("moduleN/update_data_a", value);
      },
    },
    ...mapGetters("visN", ["visData"]),
  },
};
</script>

<style scoped></style>
