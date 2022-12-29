<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioGrade
      v-if="visData.statement_11"
      :stat="statText.statement11"
      v-model="sl_h"
      rules="required"
      :value="sl_h"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <RadioGrade
      v-if="visData.statement_12"
      :stat="statText.statement12"
      v-model="sl_i"
      rules="required"
      :value="sl_i"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioGrade
      v-if="visData.statement_13"
      :stat="statText.statement13"
      v-model="sl_j"
      rules="required"
      :value="sl_j"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioGrade
      v-if="visData.statement_14"
      :stat="statText.statement14"
      v-model="sl_k"
      rules="required"
      :value="sl_k"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement15"
      v-if="visData.statement_15"
    />
    <RadioGrade
      v-if="visData.statement_15"
      :stat="statText.statement15"
      v-model="sl_l"
      rules="required"
      :value="sl_l"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <AreaValidation
      v-if="visData.statement_16"
      label="Andere uitgangspunten"
      rules="max:150"
      v-model="data_d"
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
    sl_h: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_h;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_i;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_j;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_k;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_k", value);
      },
    },
    sl_l: {
      get() {
        return this.$store.state.moduleB.moduleData.sl_l;
      },
      set(value) {
        this.$store.commit("moduleB/update_sl_l", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleB.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleB/update_data_d", value);
      },
    },
    ...mapGetters("visB", ["visData"]),
  },
};
</script>

<style scoped></style>
