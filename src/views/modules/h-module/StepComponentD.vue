<template>
  <div class="ml-3 mr-3 pt-4">
    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioGrade
      v-if="visData.statement_10"
      :stat="statText.statement10"
      v-model="sl_g"
      rules="required"
      :value="sl_g"
    />
    <v-divider></v-divider>
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
    <AreaValidation
      v-if="visData.statement_15"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_b"
    />
    <v-divider></v-divider>
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
    sl_g: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_g;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_g", value);
      },
    },
    sl_h: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_h;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_i;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_j;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.moduleH.moduleData.sl_k;
      },
      set(value) {
        this.$store.commit("moduleH/update_sl_k", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleH.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleH/update_data_b", value);
      },
    },
    ...mapGetters("visH", ["visData"]),
  },
};
</script>

<style scoped></style>
