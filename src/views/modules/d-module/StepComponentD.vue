<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <RadioGrade
      v-if="visData.statement_16"
      :stat="statText.statement16"
      v-model="sl_l"
      rules="required"
      :value="sl_l"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioGrade
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="sl_m"
      rules="required"
      :value="sl_m"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioGrade
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="sl_n"
      rules="required"
      :value="sl_n"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioGrade
      v-if="visData.statement_19"
      :stat="statText.statement19"
      v-model="sl_o"
      rules="required"
      :value="sl_o"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <AreaValidation
      v-if="visData.statement_20"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_d"
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
    sl_l: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_l;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_l", value);
      },
    },
    sl_m: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_m;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_m", value);
      },
    },
    sl_n: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_n;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_n", value);
      },
    },
    sl_o: {
      get() {
        return this.$store.state.moduleD.moduleData.sl_o;
      },
      set(value) {
        this.$store.commit("moduleD/update_sl_o", value);
      },
    },
    data_d: {
      get() {
        return this.$store.state.moduleD.moduleData.data_d;
      },
      set(value) {
        this.$store.commit("moduleD/update_data_d", value);
      },
    },
    ...mapGetters("visD", ["visData"]),
  },
};
</script>

<style scoped></style>
