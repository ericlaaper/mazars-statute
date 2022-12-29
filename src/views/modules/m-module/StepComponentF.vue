<template>
  <div class="ml-3 mr-3 pt-10">
    <StatementText
      :statText="statText.statement34"
      v-if="visData.statement_34"
    />
    <RadioGrade
      v-if="visData.statement_34"
      :stat="statText.statement34"
      v-model="sl_zc"
      rules="required"
      :value="sl_zc"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement35"
      v-if="visData.statement_35"
    />
    <RadioGrade
      v-if="visData.statement_35"
      :stat="statText.statement35"
      v-model="sl_zd"
      rules="required"
      :value="sl_zd"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement36"
      v-if="visData.statement_36"
    />
    <RadioGrade
      v-if="visData.statement_36"
      :stat="statText.statement36"
      v-model="sl_ze"
      rules="required"
      :value="sl_ze"
    />
    <v-divider />

    <StatementText
      :statText="statText.statement37"
      v-if="visData.statement_37"
    />
    <RadioGrade
      v-if="visData.statement_37"
      :stat="statText.statement37"
      v-model="sl_zf"
      rules="required"
      :value="sl_zf"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement38"
      v-if="visData.statement_38"
    />
    <RadioGrade
      v-if="visData.statement_38"
      :stat="statText.statement38"
      v-model="sl_zg"
      rules="required"
      :value="sl_zg"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement39"
      v-if="visData.statement_39"
    />
    <RadioGrade
      v-if="visData.statement_39"
      :stat="statText.statement39"
      v-model="sl_zh"
      rules="required"
      :value="sl_zh"
    />
    <v-divider />
    <StatementText
      :statText="statText.statement40"
      v-if="visData.statement_40"
    />
    <AreaValidation
      v-if="visData.statement_40"
      label="Uitgangspunten"
      rules="max:150"
      v-model="data_f"
    />
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepComponentF",
  props: ["statText"],
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    sl_zc: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zc;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zc", value);
      },
    },
    sl_zd: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zd;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zd", value);
      },
    },
    sl_ze: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_ze;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_ze", value);
      },
    },
    sl_zf: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zf;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zf", value);
      },
    },
    sl_zg: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zg;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zg", value);
      },
    },
    sl_zh: {
      get() {
        return this.$store.state.moduleM.moduleData.sl_zh;
      },
      set(value) {
        this.$store.commit("moduleM/update_sl_zh", value);
      },
    },
    data_f: {
      get() {
        return this.$store.state.moduleM.moduleData.data_f;
      },
      set(value) {
        this.$store.commit("moduleM/update_data_f", value);
      },
    },
    ...mapGetters("visM", ["visData"]),
  },
};
</script>

<style scoped></style>
