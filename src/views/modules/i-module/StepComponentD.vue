<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement24"
      v-if="visData.statement_24"
    />
    <RadioGrade
      v-if="visData.statement_24"
      :stat="statText.statement24"
      v-model="sl_l"
      rules="required"
      :value="sl_l"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement25"
      v-if="visData.statement_25"
    />
    <RadioGrade
      v-if="visData.statement_25"
      :stat="statText.statement25"
      v-model="sl_m"
      rules="required"
      :value="sl_m"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement26"
      v-if="visData.statement_26"
    />
    <RadioGrade
      v-if="visData.statement_26"
      :stat="statText.statement26"
      v-model="sl_n"
      rules="required"
      :value="sl_n"
    />
    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement27"
      v-if="visData.statement_27"
    />
    <RadioGrade
      v-if="visData.statement_27"
      :stat="statText.statement27"
      v-model="sl_o"
      rules="required"
      :value="sl_o"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement28"
      v-if="visData.statement_28"
    />
    <RadioGrade
      v-if="visData.statement_28"
      :stat="statText.statement28"
      v-model="sl_p"
      rules="required"
      :value="sl_p"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement29"
      v-if="visData.statement_29"
    />
    <RadioGrade
      v-if="visData.statement_29"
      :stat="statText.statement29"
      v-model="sl_q"
      rules="required"
      :value="sl_q"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement30"
      v-if="visData.statement_30"
    />
    <RadioGrade
      v-if="visData.statement_30"
      :stat="statText.statement30"
      v-model="sl_r"
      rules="required"
      :value="sl_r"
    />

    <v-divider></v-divider>
    <StatementText
      :statText="statText.statement31"
      v-if="visData.statement_31"
    />
    <AreaValidation
      v-if="visData.statement_31"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_c"
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
    sl_l: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_l;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_l", value);
      },
    },
    sl_m: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_m;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_m", value);
      },
    },
    sl_n: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_n;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_n", value);
      },
    },
    sl_o: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_o;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_o", value);
      },
    },
    sl_p: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_p;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_p", value);
      },
    },
    sl_q: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_q;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_q", value);
      },
    },
    sl_r: {
      get() {
        return this.$store.state.moduleI.moduleData.sl_r;
      },
      set(value) {
        this.$store.commit("moduleI/update_sl_r", value);
      },
    },
    data_c: {
      get() {
        return this.$store.state.moduleI.moduleData.data_c;
      },
      set(value) {
        this.$store.commit("moduleI/update_data_c", value);
      },
    },
    ...mapGetters("visI", ["visData"]),
  },
};
</script>

<style scoped></style>
