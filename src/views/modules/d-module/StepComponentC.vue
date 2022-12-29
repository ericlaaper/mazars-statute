<template>
  <div class="ml-3 mr-3 pt-10">
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
    sl_i: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_i;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_i", value);
      },
    },
    sl_j: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_j;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_k;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_k", value);
      },
    },

    data_c: {
      get() {
        return this.$store.state.moduleD.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleD/update_data_c", value);
      },
    },
    ...mapGetters("visD", ["visData"]),
  },
};
</script>

<style scoped></style>
