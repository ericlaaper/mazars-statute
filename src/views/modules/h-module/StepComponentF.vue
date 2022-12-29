<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <RadioEO
      v-if="visData.statement_22"
      :stat="statText.statement22"
      v-model="question_c"
      rules="required"
      :value="question_c"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement23"
      v-if="visData.statement_23"
    />
    <RadioEO
      v-if="visData.statement_23"
      :stat="statText.statement23"
      v-model="question_d"
      rules="required"
      :value="question_d"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioEO
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="question_e"
      rules="required"
      :value="question_e"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioEO
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="question_f"
      rules="required"
      :value="question_f"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioEO
      v-if="visData.statement_26"
      :stat="statText.statement26"
      v-model="question_g"
      rules="required"
      :value="question_g"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioEO
      v-if="visData.statement_27"
      :stat="statText.statement27"
      v-model="question_h"
      rules="required"
      :value="question_h"
    />
    <v-divider></v-divider>

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <AreaValidation
      v-if="visData.statement_28"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_c"
    />
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentC",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    question_c: {
      get() {
        return this.$store.state.moduleH.moduleData.question_c;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_c", value);
      },
    },
    question_d: {
      get() {
        return this.$store.state.moduleH.moduleData.question_d;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_d", value);
      },
    },
    question_e: {
      get() {
        return this.$store.state.moduleH.moduleData.question_e;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_e", value);
      },
    },
    question_f: {
      get() {
        return this.$store.state.moduleH.moduleData.question_f;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_f", value);
      },
    },
    question_g: {
      get() {
        return this.$store.state.moduleH.moduleData.question_g;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_g", value);
      },
    },
    question_h: {
      get() {
        return this.$store.state.moduleH.moduleData.question_h;
      },
      set(value) {
        this.$store.commit("moduleH/update_question_h", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleH.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleH/update_data_c", value);
      },
    },
    ...mapGetters("visH", ["visData"]),
  },
};
</script>

<style scoped></style>
