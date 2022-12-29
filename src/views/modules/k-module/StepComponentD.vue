<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement12"
      v-if="visData.statement_12"
    />
    <RadioGrade
      v-if="visData.statement_12"
      :stat="statText.statement12"
      v-model="sl_f"
      rules="required"
      :value="sl_f"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioGrade
      v-if="visData.statement_13"
      :stat="statText.statement13"
      v-model="sl_g"
      rules="required"
      :value="sl_g"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioGrade
      v-if="visData.statement_14"
      :stat="statText.statement14"
      v-model="sl_h"
      rules="required"
      :value="sl_h"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement15"
      v-if="visData.statement_15"
    />
    <RadioGrade
      v-if="visData.statement_15"
      :stat="statText.statement15"
      v-model="sl_i"
      rules="required"
      :value="sl_i"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <AreaValidation
      v-if="visData.statement_16"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_b"
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
    sl_f: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_f;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_f", value);
      },
    },
    sl_g: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_g;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_g", value);
      },
    },
    sl_h: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_h;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_h", value);
      },
    },
    sl_i: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_i;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_i", value);
      },
    },
    data_b: {
      get() {
        return this.$store.state.moduleK.moduleData.data_b;
      },
      set(value) {
        this.$store.commit("moduleK/update_data_b", value);
      },
    },
    ...mapGetters("visK", ["visData"]),
  },
};
</script>

<style scoped></style>
