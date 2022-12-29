<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioGrade
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="sl_j"
      rules="required"
      :value="sl_j"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioGrade
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="sl_k"
      rules="required"
      :value="sl_k"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioGrade
      v-if="visData.statement_19"
      :stat="statText.statement19"
      v-model="sl_l"
      rules="required"
      :value="sl_l"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioGrade
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="sl_m"
      rules="required"
      :value="sl_m"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <RadioGrade
      v-if="visData.statement_21"
      :stat="statText.statement21"
      v-model="sl_n"
      rules="required"
      :value="sl_n"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement22"
      v-if="visData.statement_22"
    />
    <AreaValidation
      v-if="visData.statement_22"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_c"
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
    sl_j: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_j;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_j", value);
      },
    },
    sl_k: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_k;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_k", value);
      },
    },
    sl_l: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_l;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_l", value);
      },
    },
    sl_m: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_m;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_m", value);
      },
    },
    sl_n: {
      get() {
        return this.$store.state.moduleK.moduleData.sl_n;
      },
      set(value) {
        this.$store.commit("moduleK/update_sl_n", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleK.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleK/update_data_c", value);
      },
    },
    ...mapGetters("visK", ["visData"]),
  },
};
</script>

<style scoped></style>
