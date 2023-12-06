<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <RadioJN
      v-if="visData.statement_16"
      :stat="statText.statement16"
      v-model="question_m"
      rules="required"
      :value="question_m"
    />
    <v-divider></v-divider>
    <div v-if="question_m === 'ke1'">
      <StatementText
        :statText="statText.statement17"
        v-if="visData.statement_17"
      />
      <RadioRegular
        :label="statText.statement17.name"
        v-model="question_n"
        error-message="errors"
        rules="required"
        :stat="statText.statement17"
        v-if="visData.statement_17"
      />
      <AreaValidation
        v-if="question_n === 'ke5'"
        label="Anders nl."
        rules="max:200"
        v-model="data_c"
      />
      <v-divider />
      <StatementText
        :statText="statText.statement18"
        v-if="visData.statement_18"
      />
      <AreaValidation
        v-if="visData.statement_18"
        label="Toelichting"
        rules="max:200"
        v-model="data_d"
      />
      <v-divider />
    </div>
    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioRegular
      :label="statText.statement19.name"
      v-model="question_o"
      error-message="errors"
      rules="required"
      :stat="statText.statement19"
      v-if="visData.statement_19"
    />
    <AreaValidation
      v-if="question_o === 'ke4'"
      label="Anders:"
      rules="max:200"
      v-model="data_e"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <AreaValidation
      v-if="visData.statement_20"
      label="Toelichting"
      rules="max:200"
      v-model="data_f"
    />
    <v-divider />
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
    question_m: {
      get() {
        return this.$store.state.moduleA.moduleData.question_m;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_m", value);
      },
    },
    question_n: {
      get() {
        return this.$store.state.moduleA.moduleData.question_n;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_n", value);
      },
    },
    question_o: {
      get() {
        return this.$store.state.moduleA.moduleData.question_o;
      },
      set(value) {
        this.$store.commit("moduleA/update_question_o", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleA.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_c", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleA.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_d", value);
      },
    },
    data_e: {
      get() {
        return this.$store.state.moduleA.moduleData.data_e;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_e", value);
      },
    },
    data_f: {
      get() {
        return this.$store.state.moduleA.moduleData.data_f;
      },
      set(value) {
        this.$store.commit("moduleA/update_data_f", value);
      },
    },

    ...mapGetters("visA", ["visData"]),
  },
};
</script>

<style scoped></style>
