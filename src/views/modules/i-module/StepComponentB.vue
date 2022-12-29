<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText :statText="statText.statement6" v-if="visData.statement_6" />
    <RadioGrade
      v-if="visData.statement_6"
      :stat="statText.statement6"
      v-model="sl_e"
      rules="required"
      :value="sl_e"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement7" v-if="visData.statement_7" />
    <RadioGrade
      v-if="visData.statement_7"
      :stat="statText.statement7"
      v-model="sl_f"
      rules="required"
      :value="sl_f"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement8" v-if="visData.statement_8" />
    <RadioGrade
      v-if="visData.statement_8"
      :stat="statText.statement8"
      v-model="sl_g"
      rules="required"
      :value="sl_g"
    />
    <v-divider></v-divider>
    <StatementText :statText="statText.statement9" v-if="visData.statement_9" />
    <RadioGrade
      v-if="visData.statement_9"
      :stat="statText.statement9"
      v-model="sl_h"
      rules="required"
      :value="sl_h"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement10"
      v-if="visData.statement_10"
    />
    <RadioGrade
      v-if="visData.statement_10"
      :stat="statText.statement10"
      v-model="sl_i"
      rules="required"
      :value="sl_i"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement11"
      v-if="visData.statement_11"
    />
    <RadioGrade
      v-if="visData.statement_11"
      :stat="statText.statement11"
      v-model="sl_j"
      rules="required"
      :value="sl_j"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <RadioGrade
      v-if="visData.statement_12"
      :stat="statText.statement12"
      v-model="sl_k"
      rules="required"
      :value="sl_k"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <AreaValidation
      v-if="visData.statement_13"
      label="Uitgangspunten"
      rules="max:1130"
      v-model="data_b"
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
    sl_e: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_e;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_e", value);
      },
    },
    sl_f: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_f;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_f", value);
      },
    },
    sl_g: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_g;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_g", value);
      },
    },
    sl_h: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_h;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_i;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_j;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_k;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_k", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleI.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleI/update_data_b", value);
      },
    },
    ...mapGetters("visI", ["visData"]),
  },
};
</script>

<style scoped></style>
