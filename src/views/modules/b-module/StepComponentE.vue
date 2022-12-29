<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioGrade
      v-if="visData.statement_27"
      :stat="statText.statement27"
      v-model="sl_m"
      rules="required"
      :value="sl_m"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <RadioGrade
      v-if="visData.statement_28"
      :stat="statText.statement28"
      v-model="sl_n"
      rules="required"
      :value="sl_n"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <RadioGrade
      v-if="visData.statement_29"
      :stat="statText.statement29"
      v-model="sl_o"
      rules="required"
      :value="sl_o"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement30"
      v-if="visData.statement_30"
    />
    <RadioGrade
      v-if="visData.statement_30"
      :stat="statText.statement30"
      v-model="sl_p"
      rules="required"
      :value="sl_p"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement31"
      v-if="visData.statement_31"
    />
    <RadioGrade
      v-if="visData.statement_31"
      :stat="statText.statement31"
      v-model="sl_q"
      rules="required"
      :value="sl_q"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement32"
      v-if="visData.statement_32"
    />
    <RadioGrade
      v-if="visData.statement_32"
      :stat="statText.statement32"
      v-model="sl_r"
      rules="required"
      :value="sl_r"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement33"
      v-if="visData.statement_33"
    />
    <AreaValidation
      v-if="visData.statement_33"
      label="Andere uitgangspunten"
      rules="max:150"
      v-model="data_f"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement34"
      v-if="visData.statement_34"
    />
    <RadioRegular
      :label="statText.statement34.name"
      v-model="question_l"
      error-message="errors"
      rules="required"
      :stat="statText.statement34"
    />
    <AreaValidation
      v-if="question_l === 'ke5'"
      label="Anders"
      rules="max:200"
      v-model="data_g"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement35"
      v-if="visData.statement_35"
    />
    <RadioRegular
      :label="statText.statement35.name"
      v-model="question_m"
      error-message="errors"
      rules="required"
      :stat="statText.statement35"
    />
    <AreaValidation
      v-if="question_m === 'ke5'"
      label="Anders"
      rules="max:200"
      v-model="data_h"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement36"
      v-if="visData.statement_36"
    />
    <RadioRegular
      :label="statText.statement36.name"
      v-model="question_n"
      error-message="errors"
      rules="required"
      :stat="statText.statement36"
    />
    <AreaValidation
      v-if="question_n === 'ke5'"
      label="Anders"
      rules="max:200"
      v-model="data_i"
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
    sl_m: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_m;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_m", value);
      },
    },
    sl_n: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_n;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_n", value);
      },
    },
    sl_o: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_o;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_o", value);
      },
    },
    sl_p: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_p;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_p", value);
      },
    },
    sl_q: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_q;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_q", value);
      },
    },
    sl_r: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_r", value);
      },
    },
    question_l: {
      get() {
        return this.$store.state.moduleB.moduleData.question_l;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_l", value);
      },
    },
    question_m: {
      get() {
        return this.$store.state.moduleB.moduleData.question_m;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_m", value);
      },
    },
    question_n: {
      get() {
        return this.$store.state.moduleB.moduleData.question_n;
      },
      set(value) {
        this.$store.commit("moduleB/update_question_n", value);
      },
    },

    data_f: {
      get() {
        return this.$store.state.moduleB.moduleData.data_f;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_f", value);
      },
    },
    data_g: {
      get() {
        return this.$store.state.moduleB.moduleData.data_g;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_g", value);
      },
    },
    data_h: {
      get() {
        return this.$store.state.moduleB.moduleData.data_h;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_h", value);
      },
    },
    data_i: {
      get() {
        return this.$store.state.moduleB.moduleData.data_i;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_i", value);
      },
    },
    ...mapGetters("visB", ["visData"]),
  },
};
</script>

<style scoped></style>
