<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement13"
      v-if="visData.statement_13"
    />
    <RadioGrade
      v-if="visData.statement_13"
      :stat="statText.statement13"
      v-model="sl_k"
      rules="required"
      :value="sl_k"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement14"
      v-if="visData.statement_14"
    />
    <RadioGrade
      v-if="visData.statement_14"
      :stat="statText.statement14"
      v-model="sl_l"
      rules="required"
      :value="sl_l"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement15"
      v-if="visData.statement_15"
    />
    <RadioGrade
      v-if="visData.statement_15"
      :stat="statText.statement15"
      v-model="sl_m"
      rules="required"
      :value="sl_m"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement16"
      v-if="visData.statement_16"
    />
    <RadioGrade
      v-if="visData.statement_16"
      :stat="statText.statement16"
      v-model="sl_n"
      rules="required"
      :value="sl_n"
    />
    <v-divider></v-divider>

    <StatementText
      :statText="statText.statement17"
      v-if="visData.statement_17"
    />
    <RadioGrade
      v-if="visData.statement_17"
      :stat="statText.statement17"
      v-model="sl_o"
      rules="required"
      :value="sl_o"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement18"
      v-if="visData.statement_18"
    />
    <RadioGrade
      v-if="visData.statement_18"
      :stat="statText.statement18"
      v-model="sl_p"
      rules="required"
      :value="sl_p"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement19"
      v-if="visData.statement_19"
    />
    <RadioGrade
      v-if="visData.statement_19"
      :stat="statText.statement19"
      v-model="sl_q"
      rules="required"
      :value="sl_q"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement20"
      v-if="visData.statement_20"
    />
    <RadioGrade
      v-if="visData.statement_20"
      :stat="statText.statement20"
      v-model="sl_r"
      rules="required"
      :value="sl_r"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement21"
      v-if="visData.statement_21"
    />
    <AreaValidation
      v-if="visData.statement_21"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_c"
    />
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
    sl_k: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_k;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_k", value);
      },
    },
    sl_l: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_l;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_l", value);
      },
    },
    sl_m: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_m;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_m", value);
      },
    },
    sl_n: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_n;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_n", value);
      },
    },
    sl_o: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_o;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_o", value);
      },
    },
    sl_p: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_p;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_p", value);
      },
    },
    sl_q: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_q;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_q", value);
      },
    },
    sl_r: {
      get() {
        return this.$store.state.moduleL.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleL/update_sl_r", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleL.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleL/update_data_c", value);
      },
    },
    ...mapGetters("visL", ["visData"]),
  },
};
</script>

<style scoped></style>
